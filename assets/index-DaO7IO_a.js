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
const ca = "173", Fl = 0, Ra = 1, Ol = 2, zo = 1, Bl = 2, rn = 3, Mn = 0, yt = 1, sn = 2, xn = 0, ui = 1, Ca = 2, Pa = 3, La = 4, zl = 5, On = 100, Hl = 101, kl = 102, Vl = 103, Gl = 104, Wl = 200, Xl = 201, ql = 202, Yl = 203, _s = 204, gs = 205, $l = 206, Kl = 207, Zl = 208, jl = 209, Jl = 210, Ql = 211, ec = 212, tc = 213, nc = 214, vs = 0, xs = 1, Ss = 2, fi = 3, Ms = 4, Es = 5, ys = 6, bs = 7, Ho = 0, ic = 1, rc = 2, Sn = 0, sc = 1, ac = 2, oc = 3, lc = 4, cc = 5, uc = 6, dc = 7, ko = 300, pi = 301, mi = 302, Ts = 303, As = 304, Lr = 306, ws = 1e3, zn = 1001, Rs = 1002, Vt = 1003, hc = 1004, qi = 1005, $t = 1006, Br = 1007, Hn = 1008, cn = 1009, Vo = 1010, Go = 1011, Bi = 1012, ua = 1013, kn = 1014, an = 1015, Hi = 1016, da = 1017, ha = 1018, _i = 1020, Wo = 35902, Xo = 1021, qo = 1022, kt = 1023, Yo = 1024, $o = 1025, di = 1026, gi = 1027, Ko = 1028, fa = 1029, Zo = 1030, pa = 1031, ma = 1033, vr = 33776, xr = 33777, Sr = 33778, Mr = 33779, Cs = 35840, Ps = 35841, Ls = 35842, Ds = 35843, Us = 36196, Is = 37492, Ns = 37496, Fs = 37808, Os = 37809, Bs = 37810, zs = 37811, Hs = 37812, ks = 37813, Vs = 37814, Gs = 37815, Ws = 37816, Xs = 37817, qs = 37818, Ys = 37819, $s = 37820, Ks = 37821, Er = 36492, Zs = 36494, js = 36495, jo = 36283, Js = 36284, Qs = 36285, ea = 36286, fc = 3200, pc = 3201, Jo = 0, mc = 1, vn = "", Ut = "srgb", vi = "srgb-linear", br = "linear", Ke = "srgb", Xn = 7680, Da = 519, _c = 512, gc = 513, vc = 514, Qo = 515, xc = 516, Sc = 517, Mc = 518, Ec = 519, Ua = 35044, Ia = "300 es", on = 2e3, Tr = 2001;
class Si {
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
const _t = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], zr = Math.PI / 180, ta = 180 / Math.PI;
function ki() {
  const i3 = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (_t[i3 & 255] + _t[i3 >> 8 & 255] + _t[i3 >> 16 & 255] + _t[i3 >> 24 & 255] + "-" + _t[e & 255] + _t[e >> 8 & 255] + "-" + _t[e >> 16 & 15 | 64] + _t[e >> 24 & 255] + "-" + _t[t & 63 | 128] + _t[t >> 8 & 255] + "-" + _t[t >> 16 & 255] + _t[t >> 24 & 255] + _t[n & 255] + _t[n >> 8 & 255] + _t[n >> 16 & 255] + _t[n >> 24 & 255]).toLowerCase();
}
function Ne(i3, e, t) {
  return Math.max(e, Math.min(t, i3));
}
function yc(i3, e) {
  return (i3 % e + e) % e;
}
function Hr(i3, e, t) {
  return (1 - t) * i3 + t * e;
}
function Ti(i3, e) {
  switch (e.constructor) {
    case Float32Array:
      return i3;
    case Uint32Array:
      return i3 / 4294967295;
    case Uint16Array:
      return i3 / 65535;
    case Uint8Array:
      return i3 / 255;
    case Int32Array:
      return Math.max(i3 / 2147483647, -1);
    case Int16Array:
      return Math.max(i3 / 32767, -1);
    case Int8Array:
      return Math.max(i3 / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Et(i3, e) {
  switch (e.constructor) {
    case Float32Array:
      return i3;
    case Uint32Array:
      return Math.round(i3 * 4294967295);
    case Uint16Array:
      return Math.round(i3 * 65535);
    case Uint8Array:
      return Math.round(i3 * 255);
    case Int32Array:
      return Math.round(i3 * 2147483647);
    case Int16Array:
      return Math.round(i3 * 32767);
    case Int8Array:
      return Math.round(i3 * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Ze {
  constructor(e = 0, t = 0) {
    Ze.prototype.isVector2 = true, this.x = e, this.y = t;
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
    return this.x = Ne(this.x, e.x, t.x), this.y = Ne(this.y, e.y, t.y), this;
  }
  clampScalar(e, t) {
    return this.x = Ne(this.x, e, t), this.y = Ne(this.y, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ne(n, e, t));
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
    return Math.acos(Ne(n, -1, 1));
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
class Le {
  constructor(e, t, n, r, s, a, o, l, c) {
    Le.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, r, s, a, o, l, c);
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
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], u = n[4], h = n[7], f = n[2], m = n[5], g = n[8], v = r[0], p = r[3], d = r[6], A = r[1], b = r[4], y = r[7], U = r[2], L = r[5], w = r[8];
    return s[0] = a * v + o * A + l * U, s[3] = a * p + o * b + l * L, s[6] = a * d + o * y + l * w, s[1] = c * v + u * A + h * U, s[4] = c * p + u * b + h * L, s[7] = c * d + u * y + h * w, s[2] = f * v + m * A + g * U, s[5] = f * p + m * b + g * L, s[8] = f * d + m * y + g * w, this;
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
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], u = e[8], h = u * a - o * c, f = o * l - u * s, m = c * s - a * l, g = t * h + n * f + r * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const v = 1 / g;
    return e[0] = h * v, e[1] = (r * c - u * n) * v, e[2] = (o * n - r * a) * v, e[3] = f * v, e[4] = (u * t - r * l) * v, e[5] = (r * s - o * t) * v, e[6] = m * v, e[7] = (n * l - c * t) * v, e[8] = (a * t - n * s) * v, this;
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
    return this.premultiply(kr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(kr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(kr.makeTranslation(e, t)), this;
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
const kr = new Le();
function el(i3) {
  for (let e = i3.length - 1; e >= 0; --e) if (i3[e] >= 65535) return true;
  return false;
}
function Ar(i3) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i3);
}
function bc() {
  const i3 = Ar("canvas");
  return i3.style.display = "block", i3;
}
const Na = {};
function si(i3) {
  i3 in Na || (Na[i3] = true, console.warn(i3));
}
function Tc(i3, e, t) {
  return new Promise(function(n, r) {
    function s() {
      switch (i3.clientWaitSync(e, i3.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i3.WAIT_FAILED:
          r();
          break;
        case i3.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          n();
      }
    }
    setTimeout(s, t);
  });
}
function Ac(i3) {
  const e = i3.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function wc(i3) {
  const e = i3.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const Fa = new Le().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), Oa = new Le().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function Rc() {
  const i3 = { enabled: true, workingColorSpace: vi, spaces: {}, convert: function(r, s, a) {
    return this.enabled === false || s === a || !s || !a || (this.spaces[s].transfer === Ke && (r.r = ln(r.r), r.g = ln(r.g), r.b = ln(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === Ke && (r.r = hi(r.r), r.g = hi(r.g), r.b = hi(r.b))), r;
  }, fromWorkingColorSpace: function(r, s) {
    return this.convert(r, this.workingColorSpace, s);
  }, toWorkingColorSpace: function(r, s) {
    return this.convert(r, s, this.workingColorSpace);
  }, getPrimaries: function(r) {
    return this.spaces[r].primaries;
  }, getTransfer: function(r) {
    return r === vn ? br : this.spaces[r].transfer;
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
  return i3.define({ [vi]: { primaries: e, whitePoint: n, transfer: br, toXYZ: Fa, fromXYZ: Oa, luminanceCoefficients: t, workingColorSpaceConfig: { unpackColorSpace: Ut }, outputColorSpaceConfig: { drawingBufferColorSpace: Ut } }, [Ut]: { primaries: e, whitePoint: n, transfer: Ke, toXYZ: Fa, fromXYZ: Oa, luminanceCoefficients: t, outputColorSpaceConfig: { drawingBufferColorSpace: Ut } } }), i3;
}
const Ge = Rc();
function ln(i3) {
  return i3 < 0.04045 ? i3 * 0.0773993808 : Math.pow(i3 * 0.9478672986 + 0.0521327014, 2.4);
}
function hi(i3) {
  return i3 < 31308e-7 ? i3 * 12.92 : 1.055 * Math.pow(i3, 0.41666) - 0.055;
}
let qn;
class Cc {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      qn === void 0 && (qn = Ar("canvas")), qn.width = e.width, qn.height = e.height;
      const n = qn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = qn;
    }
    return t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Ar("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let a = 0; a < s.length; a++) s[a] = ln(s[a] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(ln(t[n] / 255) * 255) : t[n] = ln(t[n]);
      return { data: t, width: e.width, height: e.height };
    } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Pc = 0;
class tl {
  constructor(e = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: Pc++ }), this.uuid = ki(), this.data = e, this.dataReady = true, this.version = 0;
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
        for (let a = 0, o = r.length; a < o; a++) r[a].isDataTexture ? s.push(Vr(r[a].image)) : s.push(Vr(r[a]));
      } else s = Vr(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Vr(i3) {
  return typeof HTMLImageElement < "u" && i3 instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i3 instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i3 instanceof ImageBitmap ? Cc.getDataURL(i3) : i3.data ? { data: Array.from(i3.data), width: i3.width, height: i3.height, type: i3.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Lc = 0;
class bt extends Si {
  constructor(e = bt.DEFAULT_IMAGE, t = bt.DEFAULT_MAPPING, n = zn, r = zn, s = $t, a = Hn, o = kt, l = cn, c = bt.DEFAULT_ANISOTROPY, u = vn) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Lc++ }), this.uuid = ki(), this.name = "", this.source = new tl(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Ze(0, 0), this.repeat = new Ze(1, 1), this.center = new Ze(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Le(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.pmremVersion = 0;
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
    if (this.mapping !== ko) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
      case ws:
        e.x = e.x - Math.floor(e.x);
        break;
      case zn:
        e.x = e.x < 0 ? 0 : 1;
        break;
      case Rs:
        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
        break;
    }
    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
      case ws:
        e.y = e.y - Math.floor(e.y);
        break;
      case zn:
        e.y = e.y < 0 ? 0 : 1;
        break;
      case Rs:
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
bt.DEFAULT_IMAGE = null;
bt.DEFAULT_MAPPING = ko;
bt.DEFAULT_ANISOTROPY = 1;
class at {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    at.prototype.isVector4 = true, this.x = e, this.y = t, this.z = n, this.w = r;
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
    const l = e.elements, c = l[0], u = l[4], h = l[8], f = l[1], m = l[5], g = l[9], v = l[2], p = l[6], d = l[10];
    if (Math.abs(u - f) < 0.01 && Math.abs(h - v) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(u + f) < 0.1 && Math.abs(h + v) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(c + m + d - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const b = (c + 1) / 2, y = (m + 1) / 2, U = (d + 1) / 2, L = (u + f) / 4, w = (h + v) / 4, I = (g + p) / 4;
      return b > y && b > U ? b < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(b), r = L / n, s = w / n) : y > U ? y < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(y), n = L / r, s = I / r) : U < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(U), n = w / s, r = I / s), this.set(n, r, s, t), this;
    }
    let A = Math.sqrt((p - g) * (p - g) + (h - v) * (h - v) + (f - u) * (f - u));
    return Math.abs(A) < 1e-3 && (A = 1), this.x = (p - g) / A, this.y = (h - v) / A, this.z = (f - u) / A, this.w = Math.acos((c + m + d - 1) / 2), this;
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
    return this.x = Ne(this.x, e.x, t.x), this.y = Ne(this.y, e.y, t.y), this.z = Ne(this.z, e.z, t.z), this.w = Ne(this.w, e.w, t.w), this;
  }
  clampScalar(e, t) {
    return this.x = Ne(this.x, e, t), this.y = Ne(this.y, e, t), this.z = Ne(this.z, e, t), this.w = Ne(this.w, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ne(n, e, t));
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
class Dc extends Si {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = true, this.width = e, this.height = t, this.depth = 1, this.scissor = new at(0, 0, e, t), this.scissorTest = false, this.viewport = new at(0, 0, e, t);
    const r = { width: e, height: t, depth: 1 };
    n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: $t, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1 }, n);
    const s = new bt(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
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
    return this.texture.source = new tl(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Vn extends Dc {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = true;
  }
}
class nl extends bt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = Vt, this.minFilter = Vt, this.wrapR = zn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Uc extends bt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = Vt, this.minFilter = Vt, this.wrapR = zn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class Vi {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = true, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  static slerpFlat(e, t, n, r, s, a, o) {
    let l = n[r + 0], c = n[r + 1], u = n[r + 2], h = n[r + 3];
    const f = s[a + 0], m = s[a + 1], g = s[a + 2], v = s[a + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
      return;
    }
    if (o === 1) {
      e[t + 0] = f, e[t + 1] = m, e[t + 2] = g, e[t + 3] = v;
      return;
    }
    if (h !== v || l !== f || c !== m || u !== g) {
      let p = 1 - o;
      const d = l * f + c * m + u * g + h * v, A = d >= 0 ? 1 : -1, b = 1 - d * d;
      if (b > Number.EPSILON) {
        const U = Math.sqrt(b), L = Math.atan2(U, d * A);
        p = Math.sin(p * L) / U, o = Math.sin(o * L) / U;
      }
      const y = o * A;
      if (l = l * p + f * y, c = c * p + m * y, u = u * p + g * y, h = h * p + v * y, p === 1 - o) {
        const U = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
        l *= U, c *= U, u *= U, h *= U;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, a) {
    const o = n[r], l = n[r + 1], c = n[r + 2], u = n[r + 3], h = s[a], f = s[a + 1], m = s[a + 2], g = s[a + 3];
    return e[t] = o * g + u * h + l * m - c * f, e[t + 1] = l * g + u * f + c * h - o * m, e[t + 2] = c * g + u * m + o * f - l * h, e[t + 3] = u * g - o * h - l * f - c * m, e;
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
    const n = e._x, r = e._y, s = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), u = o(r / 2), h = o(s / 2), f = l(n / 2), m = l(r / 2), g = l(s / 2);
    switch (a) {
      case "XYZ":
        this._x = f * u * h + c * m * g, this._y = c * m * h - f * u * g, this._z = c * u * g + f * m * h, this._w = c * u * h - f * m * g;
        break;
      case "YXZ":
        this._x = f * u * h + c * m * g, this._y = c * m * h - f * u * g, this._z = c * u * g - f * m * h, this._w = c * u * h + f * m * g;
        break;
      case "ZXY":
        this._x = f * u * h - c * m * g, this._y = c * m * h + f * u * g, this._z = c * u * g + f * m * h, this._w = c * u * h - f * m * g;
        break;
      case "ZYX":
        this._x = f * u * h - c * m * g, this._y = c * m * h + f * u * g, this._z = c * u * g - f * m * h, this._w = c * u * h + f * m * g;
        break;
      case "YZX":
        this._x = f * u * h + c * m * g, this._y = c * m * h + f * u * g, this._z = c * u * g - f * m * h, this._w = c * u * h - f * m * g;
        break;
      case "XZY":
        this._x = f * u * h - c * m * g, this._y = c * m * h - f * u * g, this._z = c * u * g + f * m * h, this._w = c * u * h + f * m * g;
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
    const t = e.elements, n = t[0], r = t[4], s = t[8], a = t[1], o = t[5], l = t[9], c = t[2], u = t[6], h = t[10], f = n + o + h;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / m, this._x = (u - l) * m, this._y = (s - c) * m, this._z = (a - r) * m;
    } else if (n > o && n > h) {
      const m = 2 * Math.sqrt(1 + n - o - h);
      this._w = (u - l) / m, this._x = 0.25 * m, this._y = (r + a) / m, this._z = (s + c) / m;
    } else if (o > h) {
      const m = 2 * Math.sqrt(1 + o - n - h);
      this._w = (s - c) / m, this._x = (r + a) / m, this._y = 0.25 * m, this._z = (l + u) / m;
    } else {
      const m = 2 * Math.sqrt(1 + h - n - o);
      this._w = (a - r) / m, this._x = (s + c) / m, this._y = (l + u) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Ne(this.dot(e), -1, 1)));
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
    const c = Math.sqrt(l), u = Math.atan2(c, o), h = Math.sin((1 - t) * u) / c, f = Math.sin(t * u) / c;
    return this._w = a * h + this._w * f, this._x = n * h + this._x * f, this._y = r * h + this._y * f, this._z = s * h + this._z * f, this._onChangeCallback(), this;
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
class B {
  constructor(e = 0, t = 0, n = 0) {
    B.prototype.isVector3 = true, this.x = e, this.y = t, this.z = n;
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
    return this.applyQuaternion(Ba.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Ba.setFromAxisAngle(e, t));
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
    const t = this.x, n = this.y, r = this.z, s = e.x, a = e.y, o = e.z, l = e.w, c = 2 * (a * r - o * n), u = 2 * (o * t - s * r), h = 2 * (s * n - a * t);
    return this.x = t + l * c + a * h - o * u, this.y = n + l * u + o * c - s * h, this.z = r + l * h + s * u - a * c, this;
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
    return this.x = Ne(this.x, e.x, t.x), this.y = Ne(this.y, e.y, t.y), this.z = Ne(this.z, e.z, t.z), this;
  }
  clampScalar(e, t) {
    return this.x = Ne(this.x, e, t), this.y = Ne(this.y, e, t), this.z = Ne(this.z, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ne(n, e, t));
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
    return Gr.copy(this).projectOnVector(e), this.sub(Gr);
  }
  reflect(e) {
    return this.sub(Gr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Ne(n, -1, 1));
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
const Gr = new B(), Ba = new Vi();
class Gi {
  constructor(e = new B(1 / 0, 1 / 0, 1 / 0), t = new B(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(Ot.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(Ot.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Ot.copy(t).multiplyScalar(0.5);
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
      if (t === true && s !== void 0 && e.isInstancedMesh !== true) for (let a = 0, o = s.count; a < o; a++) e.isMesh === true ? e.getVertexPosition(a, Ot) : Ot.fromBufferAttribute(s, a), Ot.applyMatrix4(e.matrixWorld), this.expandByPoint(Ot);
      else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Yi.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Yi.copy(n.boundingBox)), Yi.applyMatrix4(e.matrixWorld), this.union(Yi);
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
    return this.clampPoint(e.center, Ot), Ot.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return false;
    this.getCenter(Ai), $i.subVectors(this.max, Ai), Yn.subVectors(e.a, Ai), $n.subVectors(e.b, Ai), Kn.subVectors(e.c, Ai), hn.subVectors($n, Yn), fn.subVectors(Kn, $n), Cn.subVectors(Yn, Kn);
    let t = [0, -hn.z, hn.y, 0, -fn.z, fn.y, 0, -Cn.z, Cn.y, hn.z, 0, -hn.x, fn.z, 0, -fn.x, Cn.z, 0, -Cn.x, -hn.y, hn.x, 0, -fn.y, fn.x, 0, -Cn.y, Cn.x, 0];
    return !Wr(t, Yn, $n, Kn, $i) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Wr(t, Yn, $n, Kn, $i)) ? false : (Ki.crossVectors(hn, fn), t = [Ki.x, Ki.y, Ki.z], Wr(t, Yn, $n, Kn, $i));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Ot).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Ot).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Jt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Jt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Jt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Jt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Jt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Jt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Jt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Jt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Jt), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Jt = [new B(), new B(), new B(), new B(), new B(), new B(), new B(), new B()], Ot = new B(), Yi = new Gi(), Yn = new B(), $n = new B(), Kn = new B(), hn = new B(), fn = new B(), Cn = new B(), Ai = new B(), $i = new B(), Ki = new B(), Pn = new B();
function Wr(i3, e, t, n, r) {
  for (let s = 0, a = i3.length - 3; s <= a; s += 3) {
    Pn.fromArray(i3, s);
    const o = r.x * Math.abs(Pn.x) + r.y * Math.abs(Pn.y) + r.z * Math.abs(Pn.z), l = e.dot(Pn), c = t.dot(Pn), u = n.dot(Pn);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o) return false;
  }
  return true;
}
const Ic = new Gi(), wi = new B(), Xr = new B();
class Dr {
  constructor(e = new B(), t = -1) {
    this.isSphere = true, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Ic.setFromPoints(e).getCenter(n);
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
    wi.subVectors(e, this.center);
    const t = wi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(wi, r / n), this.radius += r;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === true ? this.radius = Math.max(this.radius, e.radius) : (Xr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(wi.copy(e.center).add(Xr)), this.expandByPoint(wi.copy(e.center).sub(Xr))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Qt = new B(), qr = new B(), Zi = new B(), pn = new B(), Yr = new B(), ji = new B(), $r = new B();
class il {
  constructor(e = new B(), t = new B(0, 0, -1)) {
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
    return this.origin.copy(this.at(e, Qt)), this;
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
    const t = Qt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Qt.copy(this.origin).addScaledVector(this.direction, t), Qt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    qr.copy(e).add(t).multiplyScalar(0.5), Zi.copy(t).sub(e).normalize(), pn.copy(this.origin).sub(qr);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(Zi), o = pn.dot(this.direction), l = -pn.dot(Zi), c = pn.lengthSq(), u = Math.abs(1 - a * a);
    let h, f, m, g;
    if (u > 0) if (h = a * l - o, f = a * o - l, g = s * u, h >= 0) if (f >= -g) if (f <= g) {
      const v = 1 / u;
      h *= v, f *= v, m = h * (h + a * f + 2 * o) + f * (a * h + f + 2 * l) + c;
    } else f = s, h = Math.max(0, -(a * f + o)), m = -h * h + f * (f + 2 * l) + c;
    else f = -s, h = Math.max(0, -(a * f + o)), m = -h * h + f * (f + 2 * l) + c;
    else f <= -g ? (h = Math.max(0, -(-a * s + o)), f = h > 0 ? -s : Math.min(Math.max(-s, -l), s), m = -h * h + f * (f + 2 * l) + c) : f <= g ? (h = 0, f = Math.min(Math.max(-s, -l), s), m = f * (f + 2 * l) + c) : (h = Math.max(0, -(a * s + o)), f = h > 0 ? s : Math.min(Math.max(-s, -l), s), m = -h * h + f * (f + 2 * l) + c);
    else f = a > 0 ? -s : s, h = Math.max(0, -(a * f + o)), m = -h * h + f * (f + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, h), r && r.copy(qr).addScaledVector(Zi, f), m;
  }
  intersectSphere(e, t) {
    Qt.subVectors(e.center, this.origin);
    const n = Qt.dot(this.direction), r = Qt.dot(Qt) - n * n, s = e.radius * e.radius;
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
    const c = 1 / this.direction.x, u = 1 / this.direction.y, h = 1 / this.direction.z, f = this.origin;
    return c >= 0 ? (n = (e.min.x - f.x) * c, r = (e.max.x - f.x) * c) : (n = (e.max.x - f.x) * c, r = (e.min.x - f.x) * c), u >= 0 ? (s = (e.min.y - f.y) * u, a = (e.max.y - f.y) * u) : (s = (e.max.y - f.y) * u, a = (e.min.y - f.y) * u), n > a || s > r || ((s > n || isNaN(n)) && (n = s), (a < r || isNaN(r)) && (r = a), h >= 0 ? (o = (e.min.z - f.z) * h, l = (e.max.z - f.z) * h) : (o = (e.max.z - f.z) * h, l = (e.min.z - f.z) * h), n > l || o > r) || ((o > n || n !== n) && (n = o), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Qt) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    Yr.subVectors(t, e), ji.subVectors(n, e), $r.crossVectors(Yr, ji);
    let a = this.direction.dot($r), o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0) o = -1, a = -a;
    else return null;
    pn.subVectors(this.origin, e);
    const l = o * this.direction.dot(ji.crossVectors(pn, ji));
    if (l < 0) return null;
    const c = o * this.direction.dot(Yr.cross(pn));
    if (c < 0 || l + c > a) return null;
    const u = -o * pn.dot($r);
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
class ot {
  constructor(e, t, n, r, s, a, o, l, c, u, h, f, m, g, v, p) {
    ot.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, r, s, a, o, l, c, u, h, f, m, g, v, p);
  }
  set(e, t, n, r, s, a, o, l, c, u, h, f, m, g, v, p) {
    const d = this.elements;
    return d[0] = e, d[4] = t, d[8] = n, d[12] = r, d[1] = s, d[5] = a, d[9] = o, d[13] = l, d[2] = c, d[6] = u, d[10] = h, d[14] = f, d[3] = m, d[7] = g, d[11] = v, d[15] = p, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new ot().fromArray(this.elements);
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
    const t = this.elements, n = e.elements, r = 1 / Zn.setFromMatrixColumn(e, 0).length(), s = 1 / Zn.setFromMatrixColumn(e, 1).length(), a = 1 / Zn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(r), c = Math.sin(r), u = Math.cos(s), h = Math.sin(s);
    if (e.order === "XYZ") {
      const f = a * u, m = a * h, g = o * u, v = o * h;
      t[0] = l * u, t[4] = -l * h, t[8] = c, t[1] = m + g * c, t[5] = f - v * c, t[9] = -o * l, t[2] = v - f * c, t[6] = g + m * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const f = l * u, m = l * h, g = c * u, v = c * h;
      t[0] = f + v * o, t[4] = g * o - m, t[8] = a * c, t[1] = a * h, t[5] = a * u, t[9] = -o, t[2] = m * o - g, t[6] = v + f * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const f = l * u, m = l * h, g = c * u, v = c * h;
      t[0] = f - v * o, t[4] = -a * h, t[8] = g + m * o, t[1] = m + g * o, t[5] = a * u, t[9] = v - f * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const f = a * u, m = a * h, g = o * u, v = o * h;
      t[0] = l * u, t[4] = g * c - m, t[8] = f * c + v, t[1] = l * h, t[5] = v * c + f, t[9] = m * c - g, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const f = a * l, m = a * c, g = o * l, v = o * c;
      t[0] = l * u, t[4] = v - f * h, t[8] = g * h + m, t[1] = h, t[5] = a * u, t[9] = -o * u, t[2] = -c * u, t[6] = m * h + g, t[10] = f - v * h;
    } else if (e.order === "XZY") {
      const f = a * l, m = a * c, g = o * l, v = o * c;
      t[0] = l * u, t[4] = -h, t[8] = c * u, t[1] = f * h + v, t[5] = a * u, t[9] = m * h - g, t[2] = g * h - m, t[6] = o * u, t[10] = v * h + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Nc, e, Fc);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return wt.subVectors(e, t), wt.lengthSq() === 0 && (wt.z = 1), wt.normalize(), mn.crossVectors(n, wt), mn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? wt.x += 1e-4 : wt.z += 1e-4, wt.normalize(), mn.crossVectors(n, wt)), mn.normalize(), Ji.crossVectors(wt, mn), r[0] = mn.x, r[4] = Ji.x, r[8] = wt.x, r[1] = mn.y, r[5] = Ji.y, r[9] = wt.y, r[2] = mn.z, r[6] = Ji.z, r[10] = wt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], u = n[1], h = n[5], f = n[9], m = n[13], g = n[2], v = n[6], p = n[10], d = n[14], A = n[3], b = n[7], y = n[11], U = n[15], L = r[0], w = r[4], I = r[8], M = r[12], S = r[1], R = r[5], W = r[9], H = r[13], Z = r[2], j = r[6], Y = r[10], Q = r[14], V = r[3], ae = r[7], he = r[11], Se = r[15];
    return s[0] = a * L + o * S + l * Z + c * V, s[4] = a * w + o * R + l * j + c * ae, s[8] = a * I + o * W + l * Y + c * he, s[12] = a * M + o * H + l * Q + c * Se, s[1] = u * L + h * S + f * Z + m * V, s[5] = u * w + h * R + f * j + m * ae, s[9] = u * I + h * W + f * Y + m * he, s[13] = u * M + h * H + f * Q + m * Se, s[2] = g * L + v * S + p * Z + d * V, s[6] = g * w + v * R + p * j + d * ae, s[10] = g * I + v * W + p * Y + d * he, s[14] = g * M + v * H + p * Q + d * Se, s[3] = A * L + b * S + y * Z + U * V, s[7] = A * w + b * R + y * j + U * ae, s[11] = A * I + b * W + y * Y + U * he, s[15] = A * M + b * H + y * Q + U * Se, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], a = e[1], o = e[5], l = e[9], c = e[13], u = e[2], h = e[6], f = e[10], m = e[14], g = e[3], v = e[7], p = e[11], d = e[15];
    return g * (+s * l * h - r * c * h - s * o * f + n * c * f + r * o * m - n * l * m) + v * (+t * l * m - t * c * f + s * a * f - r * a * m + r * c * u - s * l * u) + p * (+t * c * h - t * o * m - s * a * h + n * a * m + s * o * u - n * c * u) + d * (-r * o * u - t * l * h + t * o * f + r * a * h - n * a * f + n * l * u);
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
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], u = e[8], h = e[9], f = e[10], m = e[11], g = e[12], v = e[13], p = e[14], d = e[15], A = h * p * c - v * f * c + v * l * m - o * p * m - h * l * d + o * f * d, b = g * f * c - u * p * c - g * l * m + a * p * m + u * l * d - a * f * d, y = u * v * c - g * h * c + g * o * m - a * v * m - u * o * d + a * h * d, U = g * h * l - u * v * l - g * o * f + a * v * f + u * o * p - a * h * p, L = t * A + n * b + r * y + s * U;
    if (L === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / L;
    return e[0] = A * w, e[1] = (v * f * s - h * p * s - v * r * m + n * p * m + h * r * d - n * f * d) * w, e[2] = (o * p * s - v * l * s + v * r * c - n * p * c - o * r * d + n * l * d) * w, e[3] = (h * l * s - o * f * s - h * r * c + n * f * c + o * r * m - n * l * m) * w, e[4] = b * w, e[5] = (u * p * s - g * f * s + g * r * m - t * p * m - u * r * d + t * f * d) * w, e[6] = (g * l * s - a * p * s - g * r * c + t * p * c + a * r * d - t * l * d) * w, e[7] = (a * f * s - u * l * s + u * r * c - t * f * c - a * r * m + t * l * m) * w, e[8] = y * w, e[9] = (g * h * s - u * v * s - g * n * m + t * v * m + u * n * d - t * h * d) * w, e[10] = (a * v * s - g * o * s + g * n * c - t * v * c - a * n * d + t * o * d) * w, e[11] = (u * o * s - a * h * s - u * n * c + t * h * c + a * n * m - t * o * m) * w, e[12] = U * w, e[13] = (u * v * r - g * h * r + g * n * f - t * v * f - u * n * p + t * h * p) * w, e[14] = (g * o * r - a * v * r - g * n * l + t * v * l + a * n * p - t * o * p) * w, e[15] = (a * h * r - u * o * r + u * n * l - t * h * l - a * n * f + t * o * f) * w, this;
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
    const r = this.elements, s = t._x, a = t._y, o = t._z, l = t._w, c = s + s, u = a + a, h = o + o, f = s * c, m = s * u, g = s * h, v = a * u, p = a * h, d = o * h, A = l * c, b = l * u, y = l * h, U = n.x, L = n.y, w = n.z;
    return r[0] = (1 - (v + d)) * U, r[1] = (m + y) * U, r[2] = (g - b) * U, r[3] = 0, r[4] = (m - y) * L, r[5] = (1 - (f + d)) * L, r[6] = (p + A) * L, r[7] = 0, r[8] = (g + b) * w, r[9] = (p - A) * w, r[10] = (1 - (f + v)) * w, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  decompose(e, t, n) {
    const r = this.elements;
    let s = Zn.set(r[0], r[1], r[2]).length();
    const a = Zn.set(r[4], r[5], r[6]).length(), o = Zn.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], Bt.copy(this);
    const c = 1 / s, u = 1 / a, h = 1 / o;
    return Bt.elements[0] *= c, Bt.elements[1] *= c, Bt.elements[2] *= c, Bt.elements[4] *= u, Bt.elements[5] *= u, Bt.elements[6] *= u, Bt.elements[8] *= h, Bt.elements[9] *= h, Bt.elements[10] *= h, t.setFromRotationMatrix(Bt), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, r, s, a, o = on) {
    const l = this.elements, c = 2 * s / (t - e), u = 2 * s / (n - r), h = (t + e) / (t - e), f = (n + r) / (n - r);
    let m, g;
    if (o === on) m = -(a + s) / (a - s), g = -2 * a * s / (a - s);
    else if (o === Tr) m = -a / (a - s), g = -a * s / (a - s);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = h, l[12] = 0, l[1] = 0, l[5] = u, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = m, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, r, s, a, o = on) {
    const l = this.elements, c = 1 / (t - e), u = 1 / (n - r), h = 1 / (a - s), f = (t + e) * c, m = (n + r) * u;
    let g, v;
    if (o === on) g = (a + s) * h, v = -2 * h;
    else if (o === Tr) g = s * h, v = -1 * h;
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -f, l[1] = 0, l[5] = 2 * u, l[9] = 0, l[13] = -m, l[2] = 0, l[6] = 0, l[10] = v, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
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
const Zn = new B(), Bt = new ot(), Nc = new B(0, 0, 0), Fc = new B(1, 1, 1), mn = new B(), Ji = new B(), wt = new B(), za = new ot(), Ha = new Vi();
class un {
  constructor(e = 0, t = 0, n = 0, r = un.DEFAULT_ORDER) {
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
    const r = e.elements, s = r[0], a = r[4], o = r[8], l = r[1], c = r[5], u = r[9], h = r[2], f = r[6], m = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Ne(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, m), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(f, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ne(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ne(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-h, m), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Ne(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(f, m), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(Ne(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, s)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-Ne(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-u, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return za.makeRotationFromQuaternion(e), this.setFromRotationMatrix(za, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Ha.setFromEuler(this), this.setFromQuaternion(Ha, e);
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
un.DEFAULT_ORDER = "XYZ";
class rl {
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
let Oc = 0;
const ka = new B(), jn = new Vi(), en = new ot(), Qi = new B(), Ri = new B(), Bc = new B(), zc = new Vi(), Va = new B(1, 0, 0), Ga = new B(0, 1, 0), Wa = new B(0, 0, 1), Xa = { type: "added" }, Hc = { type: "removed" }, Jn = { type: "childadded", child: null }, Kr = { type: "childremoved", child: null };
class Tt extends Si {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: Oc++ }), this.uuid = ki(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Tt.DEFAULT_UP.clone();
    const e = new B(), t = new un(), n = new Vi(), r = new B(1, 1, 1);
    function s() {
      n.setFromEuler(t, false);
    }
    function a() {
      t.setFromQuaternion(n, void 0, false);
    }
    t._onChange(s), n._onChange(a), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: e }, rotation: { configurable: true, enumerable: true, value: t }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: r }, modelViewMatrix: { value: new ot() }, normalMatrix: { value: new Le() } }), this.matrix = new ot(), this.matrixWorld = new ot(), this.matrixAutoUpdate = Tt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new rl(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return jn.setFromAxisAngle(e, t), this.quaternion.multiply(jn), this;
  }
  rotateOnWorldAxis(e, t) {
    return jn.setFromAxisAngle(e, t), this.quaternion.premultiply(jn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Va, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Ga, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Wa, e);
  }
  translateOnAxis(e, t) {
    return ka.copy(e).applyQuaternion(this.quaternion), this.position.add(ka.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Va, e);
  }
  translateY(e) {
    return this.translateOnAxis(Ga, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Wa, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(en.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Qi.copy(e) : Qi.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(true, false), Ri.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? en.lookAt(Ri, Qi, this.up) : en.lookAt(Qi, Ri, this.up), this.quaternion.setFromRotationMatrix(en), r && (en.extractRotation(r.matrixWorld), jn.setFromRotationMatrix(en), this.quaternion.premultiply(jn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Xa), Jn.child = e, this.dispatchEvent(Jn), Jn.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Hc), Kr.child = e, this.dispatchEvent(Kr), Kr.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(true, false), en.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(true, false), en.multiply(e.parent.matrixWorld)), e.applyMatrix4(en), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(false, true), e.dispatchEvent(Xa), Jn.child = e, this.dispatchEvent(Jn), Jn.child = null, this;
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
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Ri, e, Bc), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Ri, zc, e), e;
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
          const h = l[c];
          s(e.shapes, h);
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
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), u = a(e.images), h = a(e.shapes), f = a(e.skeletons), m = a(e.animations), g = a(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), h.length > 0 && (n.shapes = h), f.length > 0 && (n.skeletons = f), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
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
Tt.DEFAULT_UP = new B(0, 1, 0);
Tt.DEFAULT_MATRIX_AUTO_UPDATE = true;
Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const zt = new B(), tn = new B(), Zr = new B(), nn = new B(), Qn = new B(), ei = new B(), qa = new B(), jr = new B(), Jr = new B(), Qr = new B(), es = new at(), ts = new at(), ns = new at();
class Ht {
  constructor(e = new B(), t = new B(), n = new B()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), zt.subVectors(e, t), r.cross(zt);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, r, s) {
    zt.subVectors(r, t), tn.subVectors(n, t), Zr.subVectors(e, t);
    const a = zt.dot(zt), o = zt.dot(tn), l = zt.dot(Zr), c = tn.dot(tn), u = tn.dot(Zr), h = a * c - o * o;
    if (h === 0) return s.set(0, 0, 0), null;
    const f = 1 / h, m = (c * l - o * u) * f, g = (a * u - o * l) * f;
    return s.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, nn) === null ? false : nn.x >= 0 && nn.y >= 0 && nn.x + nn.y <= 1;
  }
  static getInterpolation(e, t, n, r, s, a, o, l) {
    return this.getBarycoord(e, t, n, r, nn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, nn.x), l.addScaledVector(a, nn.y), l.addScaledVector(o, nn.z), l);
  }
  static getInterpolatedAttribute(e, t, n, r, s, a) {
    return es.setScalar(0), ts.setScalar(0), ns.setScalar(0), es.fromBufferAttribute(e, t), ts.fromBufferAttribute(e, n), ns.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(es, s.x), a.addScaledVector(ts, s.y), a.addScaledVector(ns, s.z), a;
  }
  static isFrontFacing(e, t, n, r) {
    return zt.subVectors(n, t), tn.subVectors(e, t), zt.cross(tn).dot(r) < 0;
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
    return zt.subVectors(this.c, this.b), tn.subVectors(this.a, this.b), zt.cross(tn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Ht.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Ht.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, r, s) {
    return Ht.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return Ht.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Ht.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, r = this.b, s = this.c;
    let a, o;
    Qn.subVectors(r, n), ei.subVectors(s, n), jr.subVectors(e, n);
    const l = Qn.dot(jr), c = ei.dot(jr);
    if (l <= 0 && c <= 0) return t.copy(n);
    Jr.subVectors(e, r);
    const u = Qn.dot(Jr), h = ei.dot(Jr);
    if (u >= 0 && h <= u) return t.copy(r);
    const f = l * h - u * c;
    if (f <= 0 && l >= 0 && u <= 0) return a = l / (l - u), t.copy(n).addScaledVector(Qn, a);
    Qr.subVectors(e, s);
    const m = Qn.dot(Qr), g = ei.dot(Qr);
    if (g >= 0 && m <= g) return t.copy(s);
    const v = m * c - l * g;
    if (v <= 0 && c >= 0 && g <= 0) return o = c / (c - g), t.copy(n).addScaledVector(ei, o);
    const p = u * g - m * h;
    if (p <= 0 && h - u >= 0 && m - g >= 0) return qa.subVectors(s, r), o = (h - u) / (h - u + (m - g)), t.copy(r).addScaledVector(qa, o);
    const d = 1 / (p + v + f);
    return a = v * d, o = f * d, t.copy(n).addScaledVector(Qn, a).addScaledVector(ei, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const sl = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, _n = { h: 0, s: 0, l: 0 }, er = { h: 0, s: 0, l: 0 };
function is(i3, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i3 + (e - i3) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i3 + (e - i3) * 6 * (2 / 3 - t) : i3;
}
let Xe = class {
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
  setHex(e, t = Ut) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Ge.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, r = Ge.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Ge.toWorkingColorSpace(this, r), this;
  }
  setHSL(e, t, n, r = Ge.workingColorSpace) {
    if (e = yc(e, 1), t = Ne(t, 0, 1), n = Ne(n, 0, 1), t === 0) this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = is(a, s, e + 1 / 3), this.g = is(a, s, e), this.b = is(a, s, e - 1 / 3);
    }
    return Ge.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = Ut) {
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
  setColorName(e, t = Ut) {
    const n = sl[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = ln(e.r), this.g = ln(e.g), this.b = ln(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = hi(e.r), this.g = hi(e.g), this.b = hi(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ut) {
    return Ge.fromWorkingColorSpace(gt.copy(this), e), Math.round(Ne(gt.r * 255, 0, 255)) * 65536 + Math.round(Ne(gt.g * 255, 0, 255)) * 256 + Math.round(Ne(gt.b * 255, 0, 255));
  }
  getHexString(e = Ut) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Ge.workingColorSpace) {
    Ge.fromWorkingColorSpace(gt.copy(this), t);
    const n = gt.r, r = gt.g, s = gt.b, a = Math.max(n, r, s), o = Math.min(n, r, s);
    let l, c;
    const u = (o + a) / 2;
    if (o === a) l = 0, c = 0;
    else {
      const h = a - o;
      switch (c = u <= 0.5 ? h / (a + o) : h / (2 - a - o), a) {
        case n:
          l = (r - s) / h + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / h + 2;
          break;
        case s:
          l = (n - r) / h + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = u, e;
  }
  getRGB(e, t = Ge.workingColorSpace) {
    return Ge.fromWorkingColorSpace(gt.copy(this), t), e.r = gt.r, e.g = gt.g, e.b = gt.b, e;
  }
  getStyle(e = Ut) {
    Ge.fromWorkingColorSpace(gt.copy(this), e);
    const t = gt.r, n = gt.g, r = gt.b;
    return e !== Ut ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(_n), this.setHSL(_n.h + e, _n.s + t, _n.l + n);
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
    this.getHSL(_n), e.getHSL(er);
    const n = Hr(_n.h, er.h, t), r = Hr(_n.s, er.s, t), s = Hr(_n.l, er.l, t);
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
};
const gt = new Xe();
Xe.NAMES = sl;
let kc = 0;
class Mi extends Si {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: kc++ }), this.uuid = ki(), this.name = "", this.type = "Material", this.blending = ui, this.side = Mn, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = _s, this.blendDst = gs, this.blendEquation = On, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Xe(0, 0, 0), this.blendAlpha = 0, this.depthFunc = fi, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = Da, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Xn, this.stencilZFail = Xn, this.stencilZPass = Xn, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== ui && (n.blending = this.blending), this.side !== Mn && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== _s && (n.blendSrc = this.blendSrc), this.blendDst !== gs && (n.blendDst = this.blendDst), this.blendEquation !== On && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== fi && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Da && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Xn && (n.stencilFail = this.stencilFail), this.stencilZFail !== Xn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Xn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
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
class al extends Mi {
  constructor(e) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Xe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new un(), this.combine = Ho, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ct = new B(), tr = new Ze();
let Vc = 0;
class Zt {
  constructor(e, t, n = false) {
    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: Vc++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Ua, this.updateRanges = [], this.gpuType = an, this.version = 0;
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
    if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) tr.fromBufferAttribute(this, t), tr.applyMatrix3(e), this.setXY(t, tr.x, tr.y);
    else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) ct.fromBufferAttribute(this, t), ct.applyMatrix3(e), this.setXYZ(t, ct.x, ct.y, ct.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++) ct.fromBufferAttribute(this, t), ct.applyMatrix4(e), this.setXYZ(t, ct.x, ct.y, ct.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) ct.fromBufferAttribute(this, t), ct.applyNormalMatrix(e), this.setXYZ(t, ct.x, ct.y, ct.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) ct.fromBufferAttribute(this, t), ct.transformDirection(e), this.setXYZ(t, ct.x, ct.y, ct.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Ti(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Et(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Ti(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Et(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Ti(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Et(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Ti(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Et(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Ti(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Et(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Et(t, this.array), n = Et(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, r) {
    return e *= this.itemSize, this.normalized && (t = Et(t, this.array), n = Et(n, this.array), r = Et(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  }
  setXYZW(e, t, n, r, s) {
    return e *= this.itemSize, this.normalized && (t = Et(t, this.array), n = Et(n, this.array), r = Et(r, this.array), s = Et(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (e.name = this.name), this.usage !== Ua && (e.usage = this.usage), e;
  }
}
class ol extends Zt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class ll extends Zt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Gt extends Zt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Gc = 0;
const Dt = new ot(), rs = new Tt(), ti = new B(), Rt = new Gi(), Ci = new Gi(), ht = new B();
class dn extends Si {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: Gc++ }), this.uuid = ki(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (el(e) ? ll : ol)(e, 1) : this.index = e, this;
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
      const s = new Le().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = true;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Dt.makeRotationFromQuaternion(e), this.applyMatrix4(Dt), this;
  }
  rotateX(e) {
    return Dt.makeRotationX(e), this.applyMatrix4(Dt), this;
  }
  rotateY(e) {
    return Dt.makeRotationY(e), this.applyMatrix4(Dt), this;
  }
  rotateZ(e) {
    return Dt.makeRotationZ(e), this.applyMatrix4(Dt), this;
  }
  translate(e, t, n) {
    return Dt.makeTranslation(e, t, n), this.applyMatrix4(Dt), this;
  }
  scale(e, t, n) {
    return Dt.makeScale(e, t, n), this.applyMatrix4(Dt), this;
  }
  lookAt(e) {
    return rs.lookAt(e), rs.updateMatrix(), this.applyMatrix4(rs.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(ti).negate(), this.translate(ti.x, ti.y, ti.z), this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let r = 0, s = e.length; r < s; r++) {
        const a = e[r];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new Gt(n, 3));
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
    this.boundingBox === null && (this.boundingBox = new Gi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new B(-1 / 0, -1 / 0, -1 / 0), new B(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, r = t.length; n < r; n++) {
        const s = t[n];
        Rt.setFromBufferAttribute(s), this.morphTargetsRelative ? (ht.addVectors(this.boundingBox.min, Rt.min), this.boundingBox.expandByPoint(ht), ht.addVectors(this.boundingBox.max, Rt.max), this.boundingBox.expandByPoint(ht)) : (this.boundingBox.expandByPoint(Rt.min), this.boundingBox.expandByPoint(Rt.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Dr());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new B(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Rt.setFromBufferAttribute(e), t) for (let s = 0, a = t.length; s < a; s++) {
        const o = t[s];
        Ci.setFromBufferAttribute(o), this.morphTargetsRelative ? (ht.addVectors(Rt.min, Ci.min), Rt.expandByPoint(ht), ht.addVectors(Rt.max, Ci.max), Rt.expandByPoint(ht)) : (Rt.expandByPoint(Ci.min), Rt.expandByPoint(Ci.max));
      }
      Rt.getCenter(n);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++) ht.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(ht));
      if (t) for (let s = 0, a = t.length; s < a; s++) {
        const o = t[s], l = this.morphTargetsRelative;
        for (let c = 0, u = o.count; c < u; c++) ht.fromBufferAttribute(o, c), l && (ti.fromBufferAttribute(e, c), ht.add(ti)), r = Math.max(r, n.distanceToSquared(ht));
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
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new Zt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let I = 0; I < n.count; I++) o[I] = new B(), l[I] = new B();
    const c = new B(), u = new B(), h = new B(), f = new Ze(), m = new Ze(), g = new Ze(), v = new B(), p = new B();
    function d(I, M, S) {
      c.fromBufferAttribute(n, I), u.fromBufferAttribute(n, M), h.fromBufferAttribute(n, S), f.fromBufferAttribute(s, I), m.fromBufferAttribute(s, M), g.fromBufferAttribute(s, S), u.sub(c), h.sub(c), m.sub(f), g.sub(f);
      const R = 1 / (m.x * g.y - g.x * m.y);
      isFinite(R) && (v.copy(u).multiplyScalar(g.y).addScaledVector(h, -m.y).multiplyScalar(R), p.copy(h).multiplyScalar(m.x).addScaledVector(u, -g.x).multiplyScalar(R), o[I].add(v), o[M].add(v), o[S].add(v), l[I].add(p), l[M].add(p), l[S].add(p));
    }
    let A = this.groups;
    A.length === 0 && (A = [{ start: 0, count: e.count }]);
    for (let I = 0, M = A.length; I < M; ++I) {
      const S = A[I], R = S.start, W = S.count;
      for (let H = R, Z = R + W; H < Z; H += 3) d(e.getX(H + 0), e.getX(H + 1), e.getX(H + 2));
    }
    const b = new B(), y = new B(), U = new B(), L = new B();
    function w(I) {
      U.fromBufferAttribute(r, I), L.copy(U);
      const M = o[I];
      b.copy(M), b.sub(U.multiplyScalar(U.dot(M))).normalize(), y.crossVectors(L, M);
      const R = y.dot(l[I]) < 0 ? -1 : 1;
      a.setXYZW(I, b.x, b.y, b.z, R);
    }
    for (let I = 0, M = A.length; I < M; ++I) {
      const S = A[I], R = S.start, W = S.count;
      for (let H = R, Z = R + W; H < Z; H += 3) w(e.getX(H + 0)), w(e.getX(H + 1)), w(e.getX(H + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0) n = new Zt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else for (let f = 0, m = n.count; f < m; f++) n.setXYZ(f, 0, 0, 0);
      const r = new B(), s = new B(), a = new B(), o = new B(), l = new B(), c = new B(), u = new B(), h = new B();
      if (e) for (let f = 0, m = e.count; f < m; f += 3) {
        const g = e.getX(f + 0), v = e.getX(f + 1), p = e.getX(f + 2);
        r.fromBufferAttribute(t, g), s.fromBufferAttribute(t, v), a.fromBufferAttribute(t, p), u.subVectors(a, s), h.subVectors(r, s), u.cross(h), o.fromBufferAttribute(n, g), l.fromBufferAttribute(n, v), c.fromBufferAttribute(n, p), o.add(u), l.add(u), c.add(u), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(v, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z);
      }
      else for (let f = 0, m = t.count; f < m; f += 3) r.fromBufferAttribute(t, f + 0), s.fromBufferAttribute(t, f + 1), a.fromBufferAttribute(t, f + 2), u.subVectors(a, s), h.subVectors(r, s), u.cross(h), n.setXYZ(f + 0, u.x, u.y, u.z), n.setXYZ(f + 1, u.x, u.y, u.z), n.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++) ht.fromBufferAttribute(e, t), ht.normalize(), e.setXYZ(t, ht.x, ht.y, ht.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, u = o.itemSize, h = o.normalized, f = new c.constructor(l.length * u);
      let m = 0, g = 0;
      for (let v = 0, p = l.length; v < p; v++) {
        o.isInterleavedBufferAttribute ? m = l[v] * o.data.stride + o.offset : m = l[v] * u;
        for (let d = 0; d < u; d++) f[g++] = c[m++];
      }
      return new Zt(f, u, h);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new dn(), n = this.index.array, r = this.attributes;
    for (const o in r) {
      const l = r[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let u = 0, h = c.length; u < h; u++) {
        const f = c[u], m = e(f, n);
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
      for (let h = 0, f = c.length; h < f; h++) {
        const m = c[h];
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
      const u = [], h = s[c];
      for (let f = 0, m = h.length; f < m; f++) u.push(h[f].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, u = a.length; c < u; c++) {
      const h = a[c];
      this.addGroup(h.start, h.count, h.materialIndex);
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
const Ya = new ot(), Ln = new il(), nr = new Dr(), $a = new B(), ir = new B(), rr = new B(), sr = new B(), ss = new B(), ar = new B(), Ka = new B(), or = new B();
class Kt extends Tt {
  constructor(e = new dn(), t = new al()) {
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
      ar.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = o[l], h = s[l];
        u !== 0 && (ss.fromBufferAttribute(h, e), a ? ar.addScaledVector(ss, u) : ar.addScaledVector(ss.sub(t), u));
      }
      t.add(ar);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), nr.copy(n.boundingSphere), nr.applyMatrix4(s), Ln.copy(e.ray).recast(e.near), !(nr.containsPoint(Ln.origin) === false && (Ln.intersectSphere(nr, $a) === null || Ln.origin.distanceToSquared($a) > (e.far - e.near) ** 2)) && (Ya.copy(s).invert(), Ln.copy(e.ray).applyMatrix4(Ya), !(n.boundingBox !== null && Ln.intersectsBox(n.boundingBox) === false) && this._computeIntersections(e, t, Ln)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry, a = this.material, o = s.index, l = s.attributes.position, c = s.attributes.uv, u = s.attributes.uv1, h = s.attributes.normal, f = s.groups, m = s.drawRange;
    if (o !== null) if (Array.isArray(a)) for (let g = 0, v = f.length; g < v; g++) {
      const p = f[g], d = a[p.materialIndex], A = Math.max(p.start, m.start), b = Math.min(o.count, Math.min(p.start + p.count, m.start + m.count));
      for (let y = A, U = b; y < U; y += 3) {
        const L = o.getX(y), w = o.getX(y + 1), I = o.getX(y + 2);
        r = lr(this, d, e, n, c, u, h, L, w, I), r && (r.faceIndex = Math.floor(y / 3), r.face.materialIndex = p.materialIndex, t.push(r));
      }
    }
    else {
      const g = Math.max(0, m.start), v = Math.min(o.count, m.start + m.count);
      for (let p = g, d = v; p < d; p += 3) {
        const A = o.getX(p), b = o.getX(p + 1), y = o.getX(p + 2);
        r = lr(this, a, e, n, c, u, h, A, b, y), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
      }
    }
    else if (l !== void 0) if (Array.isArray(a)) for (let g = 0, v = f.length; g < v; g++) {
      const p = f[g], d = a[p.materialIndex], A = Math.max(p.start, m.start), b = Math.min(l.count, Math.min(p.start + p.count, m.start + m.count));
      for (let y = A, U = b; y < U; y += 3) {
        const L = y, w = y + 1, I = y + 2;
        r = lr(this, d, e, n, c, u, h, L, w, I), r && (r.faceIndex = Math.floor(y / 3), r.face.materialIndex = p.materialIndex, t.push(r));
      }
    }
    else {
      const g = Math.max(0, m.start), v = Math.min(l.count, m.start + m.count);
      for (let p = g, d = v; p < d; p += 3) {
        const A = p, b = p + 1, y = p + 2;
        r = lr(this, a, e, n, c, u, h, A, b, y), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
      }
    }
  }
}
function Wc(i3, e, t, n, r, s, a, o) {
  let l;
  if (e.side === yt ? l = n.intersectTriangle(a, s, r, true, o) : l = n.intersectTriangle(r, s, a, e.side === Mn, o), l === null) return null;
  or.copy(o), or.applyMatrix4(i3.matrixWorld);
  const c = t.ray.origin.distanceTo(or);
  return c < t.near || c > t.far ? null : { distance: c, point: or.clone(), object: i3 };
}
function lr(i3, e, t, n, r, s, a, o, l, c) {
  i3.getVertexPosition(o, ir), i3.getVertexPosition(l, rr), i3.getVertexPosition(c, sr);
  const u = Wc(i3, e, t, n, ir, rr, sr, Ka);
  if (u) {
    const h = new B();
    Ht.getBarycoord(Ka, ir, rr, sr, h), r && (u.uv = Ht.getInterpolatedAttribute(r, o, l, c, h, new Ze())), s && (u.uv1 = Ht.getInterpolatedAttribute(s, o, l, c, h, new Ze())), a && (u.normal = Ht.getInterpolatedAttribute(a, o, l, c, h, new B()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const f = { a: o, b: l, c, normal: new B(), materialIndex: 0 };
    Ht.getNormal(ir, rr, sr, f.normal), u.face = f, u.barycoord = h;
  }
  return u;
}
class Ei extends dn {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: r, heightSegments: s, depthSegments: a };
    const o = this;
    r = Math.floor(r), s = Math.floor(s), a = Math.floor(a);
    const l = [], c = [], u = [], h = [];
    let f = 0, m = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, s, 0), g("z", "y", "x", 1, -1, n, t, -e, a, s, 1), g("x", "z", "y", 1, 1, e, n, t, r, a, 2), g("x", "z", "y", 1, -1, e, n, -t, r, a, 3), g("x", "y", "z", 1, -1, e, t, n, r, s, 4), g("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(l), this.setAttribute("position", new Gt(c, 3)), this.setAttribute("normal", new Gt(u, 3)), this.setAttribute("uv", new Gt(h, 2));
    function g(v, p, d, A, b, y, U, L, w, I, M) {
      const S = y / w, R = U / I, W = y / 2, H = U / 2, Z = L / 2, j = w + 1, Y = I + 1;
      let Q = 0, V = 0;
      const ae = new B();
      for (let he = 0; he < Y; he++) {
        const Se = he * R - H;
        for (let Ie = 0; Ie < j; Ie++) {
          const je = Ie * S - W;
          ae[v] = je * A, ae[p] = Se * b, ae[d] = Z, c.push(ae.x, ae.y, ae.z), ae[v] = 0, ae[p] = 0, ae[d] = L > 0 ? 1 : -1, u.push(ae.x, ae.y, ae.z), h.push(Ie / w), h.push(1 - he / I), Q += 1;
        }
      }
      for (let he = 0; he < I; he++) for (let Se = 0; Se < w; Se++) {
        const Ie = f + Se + j * he, je = f + Se + j * (he + 1), X = f + (Se + 1) + j * (he + 1), ne = f + (Se + 1) + j * he;
        l.push(Ie, je, ne), l.push(je, X, ne), V += 6;
      }
      o.addGroup(m, V, M), m += V, f += Q;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ei(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function xi(i3) {
  const e = {};
  for (const t in i3) {
    e[t] = {};
    for (const n in i3[t]) {
      const r = i3[t][n];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r;
    }
  }
  return e;
}
function xt(i3) {
  const e = {};
  for (let t = 0; t < i3.length; t++) {
    const n = xi(i3[t]);
    for (const r in n) e[r] = n[r];
  }
  return e;
}
function Xc(i3) {
  const e = [];
  for (let t = 0; t < i3.length; t++) e.push(i3[t].clone());
  return e;
}
function cl(i3) {
  const e = i3.getRenderTarget();
  return e === null ? i3.outputColorSpace : e.isXRRenderTarget === true ? e.texture.colorSpace : Ge.workingColorSpace;
}
const qc = { clone: xi, merge: xt };
var Yc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, $c = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class En extends Mi {
  constructor(e) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Yc, this.fragmentShader = $c, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = xi(e.uniforms), this.uniformsGroups = Xc(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
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
class ul extends Tt {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new ot(), this.projectionMatrix = new ot(), this.projectionMatrixInverse = new ot(), this.coordinateSystem = on;
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
const gn = new B(), Za = new Ze(), ja = new Ze();
class It extends ul {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = ta * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(zr * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return ta * 2 * Math.atan(Math.tan(zr * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    gn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(gn.x, gn.y).multiplyScalar(-e / gn.z), gn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(gn.x, gn.y).multiplyScalar(-e / gn.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, Za, ja), t.subVectors(ja, Za);
  }
  setViewOffset(e, t, n, r, s, a) {
    this.aspect = e / t, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(zr * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
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
const ni = -90, ii = 1;
class Kc extends Tt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new It(ni, ii, e, t);
    r.layers = this.layers, this.add(r);
    const s = new It(ni, ii, e, t);
    s.layers = this.layers, this.add(s);
    const a = new It(ni, ii, e, t);
    a.layers = this.layers, this.add(a);
    const o = new It(ni, ii, e, t);
    o.layers = this.layers, this.add(o);
    const l = new It(ni, ii, e, t);
    l.layers = this.layers, this.add(l);
    const c = new It(ni, ii, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, r, s, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === on) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === Tr) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, l, c, u] = this.children, h = e.getRenderTarget(), f = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = false;
    const v = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false, e.setRenderTarget(n, 0, r), e.render(t, s), e.setRenderTarget(n, 1, r), e.render(t, a), e.setRenderTarget(n, 2, r), e.render(t, o), e.setRenderTarget(n, 3, r), e.render(t, l), e.setRenderTarget(n, 4, r), e.render(t, c), n.texture.generateMipmaps = v, e.setRenderTarget(n, 5, r), e.render(t, u), e.setRenderTarget(h, f, m), e.xr.enabled = g, n.texture.needsPMREMUpdate = true;
  }
}
class dl extends bt {
  constructor(e, t, n, r, s, a, o, l, c, u) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : pi, super(e, t, n, r, s, a, o, l, c, u), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Zc extends Vn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = true;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new dl(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : false, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : $t;
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
			` }, r = new Ei(5, 5, 5), s = new En({ name: "CubemapFromEquirect", uniforms: xi(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: yt, blending: xn });
    s.uniforms.tEquirect.value = t;
    const a = new Kt(r, s), o = t.minFilter;
    return t.minFilter === Hn && (t.minFilter = $t), new Kc(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, r) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
class cr extends Tt {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
const jc = { type: "move" };
class as {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new cr(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new cr(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new B(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new B()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new cr(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new B(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new B()), this._grip;
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
        for (const v of e.hand.values()) {
          const p = t.getJointPose(v, n), d = this._getHandJoint(c, v);
          p !== null && (d.matrix.fromArray(p.transform.matrix), d.matrix.decompose(d.position, d.rotation, d.scale), d.matrixWorldNeedsUpdate = true, d.jointRadius = p.radius), d.visible = p !== null;
        }
        const u = c.joints["index-finger-tip"], h = c.joints["thumb-tip"], f = u.position.distanceTo(h.position), m = 0.02, g = 5e-3;
        c.inputState.pinching && f > m + g ? (c.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !c.inputState.pinching && f <= m - g && (c.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this }));
      } else l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, s.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = false, s.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = false));
      o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = true, r.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = false, r.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = false, this.dispatchEvent(jc)));
    }
    return o !== null && (o.visible = r !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new cr();
      n.matrixAutoUpdate = false, n.visible = false, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class Jc extends Tt {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new un(), this.environmentIntensity = 1, this.environmentRotation = new un(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
const os = new B(), Qc = new B(), eu = new Le();
class Nn {
  constructor(e = new B(1, 0, 0), t = 0) {
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
    const r = os.subVectors(n, t).cross(Qc.subVectors(e, t)).normalize();
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
    const n = e.delta(os), r = this.normal.dot(n);
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
    const n = t || eu.getNormalMatrix(e), r = this.coplanarPoint(os).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
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
const Dn = new Dr(), ur = new B();
class hl {
  constructor(e = new Nn(), t = new Nn(), n = new Nn(), r = new Nn(), s = new Nn(), a = new Nn()) {
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
  setFromProjectionMatrix(e, t = on) {
    const n = this.planes, r = e.elements, s = r[0], a = r[1], o = r[2], l = r[3], c = r[4], u = r[5], h = r[6], f = r[7], m = r[8], g = r[9], v = r[10], p = r[11], d = r[12], A = r[13], b = r[14], y = r[15];
    if (n[0].setComponents(l - s, f - c, p - m, y - d).normalize(), n[1].setComponents(l + s, f + c, p + m, y + d).normalize(), n[2].setComponents(l + a, f + u, p + g, y + A).normalize(), n[3].setComponents(l - a, f - u, p - g, y - A).normalize(), n[4].setComponents(l - o, f - h, p - v, y - b).normalize(), t === on) n[5].setComponents(l + o, f + h, p + v, y + b).normalize();
    else if (t === Tr) n[5].setComponents(o, h, v, b).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), Dn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Dn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Dn);
  }
  intersectsSprite(e) {
    return Dn.center.set(0, 0, 0), Dn.radius = 0.7071067811865476, Dn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Dn);
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
      if (ur.x = r.normal.x > 0 ? e.max.x : e.min.x, ur.y = r.normal.y > 0 ? e.max.y : e.min.y, ur.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(ur) < 0) return false;
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
class fl extends Mi {
  constructor(e) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new Xe(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const wr = new B(), Rr = new B(), Ja = new ot(), Pi = new il(), dr = new Dr(), ls = new B(), Qa = new B();
class tu extends Tt {
  constructor(e = new dn(), t = new fl()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let r = 1, s = t.count; r < s; r++) wr.fromBufferAttribute(t, r - 1), Rr.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += wr.distanceTo(Rr);
      e.setAttribute("lineDistance", new Gt(n, 1));
    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), dr.copy(n.boundingSphere), dr.applyMatrix4(r), dr.radius += s, e.ray.intersectsSphere(dr) === false) return;
    Ja.copy(r).invert(), Pi.copy(e.ray).applyMatrix4(Ja);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, u = n.index, f = n.attributes.position;
    if (u !== null) {
      const m = Math.max(0, a.start), g = Math.min(u.count, a.start + a.count);
      for (let v = m, p = g - 1; v < p; v += c) {
        const d = u.getX(v), A = u.getX(v + 1), b = hr(this, e, Pi, l, d, A, v);
        b && t.push(b);
      }
      if (this.isLineLoop) {
        const v = u.getX(g - 1), p = u.getX(m), d = hr(this, e, Pi, l, v, p, g - 1);
        d && t.push(d);
      }
    } else {
      const m = Math.max(0, a.start), g = Math.min(f.count, a.start + a.count);
      for (let v = m, p = g - 1; v < p; v += c) {
        const d = hr(this, e, Pi, l, v, v + 1, v);
        d && t.push(d);
      }
      if (this.isLineLoop) {
        const v = hr(this, e, Pi, l, g - 1, m, g - 1);
        v && t.push(v);
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
function hr(i3, e, t, n, r, s, a) {
  const o = i3.geometry.attributes.position;
  if (wr.fromBufferAttribute(o, r), Rr.fromBufferAttribute(o, s), t.distanceSqToSegment(wr, Rr, ls, Qa) > n) return;
  ls.applyMatrix4(i3.matrixWorld);
  const c = e.ray.origin.distanceTo(ls);
  if (!(c < e.near || c > e.far)) return { distance: c, point: Qa.clone().applyMatrix4(i3.matrixWorld), index: a, face: null, faceIndex: null, barycoord: null, object: i3 };
}
const eo = new B(), to = new B();
class nu extends tu {
  constructor(e, t) {
    super(e, t), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let r = 0, s = t.count; r < s; r += 2) eo.fromBufferAttribute(t, r), to.fromBufferAttribute(t, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + eo.distanceTo(to);
      e.setAttribute("lineDistance", new Gt(n, 1));
    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class pl extends bt {
  constructor(e, t, n, r, s, a, o, l, c, u = di) {
    if (u !== di && u !== gi) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === di && (n = kn), n === void 0 && u === gi && (n = _i), super(null, r, s, a, o, l, u, n, c), this.isDepthTexture = true, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : Vt, this.minFilter = l !== void 0 ? l : Vt, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class Ur extends dn {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: r };
    const s = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(r), c = o + 1, u = l + 1, h = e / o, f = t / l, m = [], g = [], v = [], p = [];
    for (let d = 0; d < u; d++) {
      const A = d * f - a;
      for (let b = 0; b < c; b++) {
        const y = b * h - s;
        g.push(y, -A, 0), v.push(0, 0, 1), p.push(b / o), p.push(1 - d / l);
      }
    }
    for (let d = 0; d < l; d++) for (let A = 0; A < o; A++) {
      const b = A + c * d, y = A + c * (d + 1), U = A + 1 + c * (d + 1), L = A + 1 + c * d;
      m.push(b, y, L), m.push(y, U, L);
    }
    this.setIndex(m), this.setAttribute("position", new Gt(g, 3)), this.setAttribute("normal", new Gt(v, 3)), this.setAttribute("uv", new Gt(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ur(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class iu extends Mi {
  constructor(e) {
    super(), this.isMeshNormalMaterial = true, this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Jo, this.normalScale = new Ze(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.flatShading = false, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this;
  }
}
class ru extends Mi {
  constructor(e) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = fc, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class su extends Mi {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
class au extends ul {
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
class ou extends It {
  constructor(e = []) {
    super(), this.isArrayCamera = true, this.cameras = e, this.index = 0;
  }
}
class lu extends nu {
  constructor(e = 10, t = 10, n = 4473924, r = 8947848) {
    n = new Xe(n), r = new Xe(r);
    const s = t / 2, a = e / t, o = e / 2, l = [], c = [];
    for (let f = 0, m = 0, g = -o; f <= t; f++, g += a) {
      l.push(-o, 0, g, o, 0, g), l.push(g, 0, -o, g, 0, o);
      const v = f === s ? n : r;
      v.toArray(c, m), m += 3, v.toArray(c, m), m += 3, v.toArray(c, m), m += 3, v.toArray(c, m), m += 3;
    }
    const u = new dn();
    u.setAttribute("position", new Gt(l, 3)), u.setAttribute("color", new Gt(c, 3));
    const h = new fl({ vertexColors: true, toneMapped: false });
    super(u, h), this.type = "GridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function no(i3, e, t, n) {
  const r = cu(n);
  switch (t) {
    case Xo:
      return i3 * e;
    case Yo:
      return i3 * e;
    case $o:
      return i3 * e * 2;
    case Ko:
      return i3 * e / r.components * r.byteLength;
    case fa:
      return i3 * e / r.components * r.byteLength;
    case Zo:
      return i3 * e * 2 / r.components * r.byteLength;
    case pa:
      return i3 * e * 2 / r.components * r.byteLength;
    case qo:
      return i3 * e * 3 / r.components * r.byteLength;
    case kt:
      return i3 * e * 4 / r.components * r.byteLength;
    case ma:
      return i3 * e * 4 / r.components * r.byteLength;
    case vr:
    case xr:
      return Math.floor((i3 + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Sr:
    case Mr:
      return Math.floor((i3 + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ps:
    case Ds:
      return Math.max(i3, 16) * Math.max(e, 8) / 4;
    case Cs:
    case Ls:
      return Math.max(i3, 8) * Math.max(e, 8) / 2;
    case Us:
    case Is:
      return Math.floor((i3 + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Ns:
      return Math.floor((i3 + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Fs:
      return Math.floor((i3 + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Os:
      return Math.floor((i3 + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Bs:
      return Math.floor((i3 + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case zs:
      return Math.floor((i3 + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Hs:
      return Math.floor((i3 + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case ks:
      return Math.floor((i3 + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Vs:
      return Math.floor((i3 + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Gs:
      return Math.floor((i3 + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Ws:
      return Math.floor((i3 + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Xs:
      return Math.floor((i3 + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case qs:
      return Math.floor((i3 + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Ys:
      return Math.floor((i3 + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case $s:
      return Math.floor((i3 + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Ks:
      return Math.floor((i3 + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case Er:
    case Zs:
    case js:
      return Math.ceil(i3 / 4) * Math.ceil(e / 4) * 16;
    case jo:
    case Js:
      return Math.ceil(i3 / 4) * Math.ceil(e / 4) * 8;
    case Qs:
    case ea:
      return Math.ceil(i3 / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function cu(i3) {
  switch (i3) {
    case cn:
    case Vo:
      return { byteLength: 1, components: 1 };
    case Bi:
    case Go:
    case Hi:
      return { byteLength: 2, components: 1 };
    case da:
    case ha:
      return { byteLength: 2, components: 4 };
    case kn:
    case ua:
    case an:
      return { byteLength: 4, components: 1 };
    case Wo:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i3}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: ca } }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = ca);
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function ml() {
  let i3 = null, e = false, t = null, n = null;
  function r(s, a) {
    t(s, a), n = i3.requestAnimationFrame(r);
  }
  return { start: function() {
    e !== true && t !== null && (n = i3.requestAnimationFrame(r), e = true);
  }, stop: function() {
    i3.cancelAnimationFrame(n), e = false;
  }, setAnimationLoop: function(s) {
    t = s;
  }, setContext: function(s) {
    i3 = s;
  } };
}
function uu(i3) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, l) {
    const c = o.array, u = o.usage, h = c.byteLength, f = i3.createBuffer();
    i3.bindBuffer(l, f), i3.bufferData(l, c, u), o.onUploadCallback();
    let m;
    if (c instanceof Float32Array) m = i3.FLOAT;
    else if (c instanceof Uint16Array) o.isFloat16BufferAttribute ? m = i3.HALF_FLOAT : m = i3.UNSIGNED_SHORT;
    else if (c instanceof Int16Array) m = i3.SHORT;
    else if (c instanceof Uint32Array) m = i3.UNSIGNED_INT;
    else if (c instanceof Int32Array) m = i3.INT;
    else if (c instanceof Int8Array) m = i3.BYTE;
    else if (c instanceof Uint8Array) m = i3.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) m = i3.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return { buffer: f, type: m, bytesPerElement: c.BYTES_PER_ELEMENT, version: o.version, size: h };
  }
  function n(o, l, c) {
    const u = l.array, h = l.updateRanges;
    if (i3.bindBuffer(c, o), h.length === 0) i3.bufferSubData(c, 0, u);
    else {
      h.sort((m, g) => m.start - g.start);
      let f = 0;
      for (let m = 1; m < h.length; m++) {
        const g = h[f], v = h[m];
        v.start <= g.start + g.count + 1 ? g.count = Math.max(g.count, v.start + v.count - g.start) : (++f, h[f] = v);
      }
      h.length = f + 1;
      for (let m = 0, g = h.length; m < g; m++) {
        const v = h[m];
        i3.bufferSubData(c, v.start * u.BYTES_PER_ELEMENT, u, v.start, v.count);
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
    l && (i3.deleteBuffer(l.buffer), e.delete(o));
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
var du = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, hu = `#ifdef USE_ALPHAHASH
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
#endif`, fu = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, pu = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, mu = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, _u = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, gu = `#ifdef USE_AOMAP
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
#endif`, vu = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, xu = `#ifdef USE_BATCHING
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
#endif`, Su = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Mu = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Eu = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, yu = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, bu = `#ifdef USE_IRIDESCENCE
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
#endif`, Tu = `#ifdef USE_BUMPMAP
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
#endif`, Au = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, wu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Ru = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Cu = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Pu = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Lu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Du = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Uu = `#if defined( USE_COLOR_ALPHA )
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
#endif`, Iu = `#define PI 3.141592653589793
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
} // validated`, Nu = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, Fu = `vec3 transformedNormal = objectNormal;
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
#endif`, Ou = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Bu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, zu = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Hu = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, ku = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Vu = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Gu = `#ifdef USE_ENVMAP
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
#endif`, Wu = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Xu = `#ifdef USE_ENVMAP
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
#endif`, qu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Yu = `#ifdef USE_ENVMAP
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
#endif`, $u = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Ku = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Zu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, ju = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Ju = `#ifdef USE_GRADIENTMAP
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
}`, Qu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, ed = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, td = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, nd = `uniform bool receiveShadow;
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
#endif`, id = `#ifdef USE_ENVMAP
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
#endif`, rd = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, sd = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, ad = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, od = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, ld = `PhysicalMaterial material;
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
#endif`, cd = `struct PhysicalMaterial {
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
}`, ud = `
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
#endif`, dd = `#if defined( RE_IndirectDiffuse )
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
#endif`, hd = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, fd = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, pd = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, md = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, _d = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, gd = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, vd = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, xd = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Sd = `#if defined( USE_POINTS_UV )
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
#endif`, Md = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Ed = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, yd = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, bd = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Td = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Ad = `#ifdef USE_MORPHTARGETS
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
#endif`, wd = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Rd = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, Cd = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, Pd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ld = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Dd = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Ud = `#ifdef USE_NORMALMAP
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
#endif`, Id = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Nd = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Fd = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Od = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Bd = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, zd = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, Hd = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, kd = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Vd = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Gd = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Wd = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Xd = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, qd = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Yd = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, $d = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, Kd = `float getShadowMask() {
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
}`, Zd = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, jd = `#ifdef USE_SKINNING
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
#endif`, Jd = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Qd = `#ifdef USE_SKINNING
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
#endif`, eh = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, th = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, nh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, ih = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, rh = `#ifdef USE_TRANSMISSION
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
#endif`, sh = `#ifdef USE_TRANSMISSION
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
#endif`, ah = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, oh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, lh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, ch = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const uh = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, dh = `uniform sampler2D t2D;
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
}`, hh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, fh = `#ifdef ENVMAP_TYPE_CUBE
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
}`, ph = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, mh = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, _h = `#include <common>
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
}`, gh = `#if DEPTH_PACKING == 3200
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
}`, vh = `#define DISTANCE
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
}`, xh = `#define DISTANCE
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
}`, Sh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Mh = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Eh = `uniform float scale;
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
}`, yh = `uniform vec3 diffuse;
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
}`, bh = `#include <common>
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
}`, Th = `uniform vec3 diffuse;
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
}`, Ah = `#define LAMBERT
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
}`, wh = `#define LAMBERT
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
}`, Rh = `#define MATCAP
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
}`, Ch = `#define MATCAP
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
}`, Ph = `#define NORMAL
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
}`, Lh = `#define NORMAL
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
}`, Dh = `#define PHONG
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
}`, Uh = `#define PHONG
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
}`, Ih = `#define STANDARD
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
}`, Nh = `#define STANDARD
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
}`, Fh = `#define TOON
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
}`, Oh = `#define TOON
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
}`, Bh = `uniform float size;
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
}`, zh = `uniform vec3 diffuse;
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
}`, Hh = `#include <common>
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
}`, kh = `uniform vec3 color;
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
}`, Vh = `uniform float rotation;
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
}`, Gh = `uniform vec3 diffuse;
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
}`, Ue = { alphahash_fragment: du, alphahash_pars_fragment: hu, alphamap_fragment: fu, alphamap_pars_fragment: pu, alphatest_fragment: mu, alphatest_pars_fragment: _u, aomap_fragment: gu, aomap_pars_fragment: vu, batching_pars_vertex: xu, batching_vertex: Su, begin_vertex: Mu, beginnormal_vertex: Eu, bsdfs: yu, iridescence_fragment: bu, bumpmap_pars_fragment: Tu, clipping_planes_fragment: Au, clipping_planes_pars_fragment: wu, clipping_planes_pars_vertex: Ru, clipping_planes_vertex: Cu, color_fragment: Pu, color_pars_fragment: Lu, color_pars_vertex: Du, color_vertex: Uu, common: Iu, cube_uv_reflection_fragment: Nu, defaultnormal_vertex: Fu, displacementmap_pars_vertex: Ou, displacementmap_vertex: Bu, emissivemap_fragment: zu, emissivemap_pars_fragment: Hu, colorspace_fragment: ku, colorspace_pars_fragment: Vu, envmap_fragment: Gu, envmap_common_pars_fragment: Wu, envmap_pars_fragment: Xu, envmap_pars_vertex: qu, envmap_physical_pars_fragment: id, envmap_vertex: Yu, fog_vertex: $u, fog_pars_vertex: Ku, fog_fragment: Zu, fog_pars_fragment: ju, gradientmap_pars_fragment: Ju, lightmap_pars_fragment: Qu, lights_lambert_fragment: ed, lights_lambert_pars_fragment: td, lights_pars_begin: nd, lights_toon_fragment: rd, lights_toon_pars_fragment: sd, lights_phong_fragment: ad, lights_phong_pars_fragment: od, lights_physical_fragment: ld, lights_physical_pars_fragment: cd, lights_fragment_begin: ud, lights_fragment_maps: dd, lights_fragment_end: hd, logdepthbuf_fragment: fd, logdepthbuf_pars_fragment: pd, logdepthbuf_pars_vertex: md, logdepthbuf_vertex: _d, map_fragment: gd, map_pars_fragment: vd, map_particle_fragment: xd, map_particle_pars_fragment: Sd, metalnessmap_fragment: Md, metalnessmap_pars_fragment: Ed, morphinstance_vertex: yd, morphcolor_vertex: bd, morphnormal_vertex: Td, morphtarget_pars_vertex: Ad, morphtarget_vertex: wd, normal_fragment_begin: Rd, normal_fragment_maps: Cd, normal_pars_fragment: Pd, normal_pars_vertex: Ld, normal_vertex: Dd, normalmap_pars_fragment: Ud, clearcoat_normal_fragment_begin: Id, clearcoat_normal_fragment_maps: Nd, clearcoat_pars_fragment: Fd, iridescence_pars_fragment: Od, opaque_fragment: Bd, packing: zd, premultiplied_alpha_fragment: Hd, project_vertex: kd, dithering_fragment: Vd, dithering_pars_fragment: Gd, roughnessmap_fragment: Wd, roughnessmap_pars_fragment: Xd, shadowmap_pars_fragment: qd, shadowmap_pars_vertex: Yd, shadowmap_vertex: $d, shadowmask_pars_fragment: Kd, skinbase_vertex: Zd, skinning_pars_vertex: jd, skinning_vertex: Jd, skinnormal_vertex: Qd, specularmap_fragment: eh, specularmap_pars_fragment: th, tonemapping_fragment: nh, tonemapping_pars_fragment: ih, transmission_fragment: rh, transmission_pars_fragment: sh, uv_pars_fragment: ah, uv_pars_vertex: oh, uv_vertex: lh, worldpos_vertex: ch, background_vert: uh, background_frag: dh, backgroundCube_vert: hh, backgroundCube_frag: fh, cube_vert: ph, cube_frag: mh, depth_vert: _h, depth_frag: gh, distanceRGBA_vert: vh, distanceRGBA_frag: xh, equirect_vert: Sh, equirect_frag: Mh, linedashed_vert: Eh, linedashed_frag: yh, meshbasic_vert: bh, meshbasic_frag: Th, meshlambert_vert: Ah, meshlambert_frag: wh, meshmatcap_vert: Rh, meshmatcap_frag: Ch, meshnormal_vert: Ph, meshnormal_frag: Lh, meshphong_vert: Dh, meshphong_frag: Uh, meshphysical_vert: Ih, meshphysical_frag: Nh, meshtoon_vert: Fh, meshtoon_frag: Oh, points_vert: Bh, points_frag: zh, shadow_vert: Hh, shadow_frag: kh, sprite_vert: Vh, sprite_frag: Gh }, ie = { common: { diffuse: { value: new Xe(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Le() }, alphaMap: { value: null }, alphaMapTransform: { value: new Le() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Le() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Le() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Le() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Le() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Le() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Le() }, normalScale: { value: new Ze(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Le() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Le() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Le() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Le() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Xe(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Xe(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Le() }, alphaTest: { value: 0 }, uvTransform: { value: new Le() } }, sprite: { diffuse: { value: new Xe(16777215) }, opacity: { value: 1 }, center: { value: new Ze(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Le() }, alphaMap: { value: null }, alphaMapTransform: { value: new Le() }, alphaTest: { value: 0 } } }, Yt = { basic: { uniforms: xt([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.fog]), vertexShader: Ue.meshbasic_vert, fragmentShader: Ue.meshbasic_frag }, lambert: { uniforms: xt([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.fog, ie.lights, { emissive: { value: new Xe(0) } }]), vertexShader: Ue.meshlambert_vert, fragmentShader: Ue.meshlambert_frag }, phong: { uniforms: xt([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.fog, ie.lights, { emissive: { value: new Xe(0) }, specular: { value: new Xe(1118481) }, shininess: { value: 30 } }]), vertexShader: Ue.meshphong_vert, fragmentShader: Ue.meshphong_frag }, standard: { uniforms: xt([ie.common, ie.envmap, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.roughnessmap, ie.metalnessmap, ie.fog, ie.lights, { emissive: { value: new Xe(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Ue.meshphysical_vert, fragmentShader: Ue.meshphysical_frag }, toon: { uniforms: xt([ie.common, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.gradientmap, ie.fog, ie.lights, { emissive: { value: new Xe(0) } }]), vertexShader: Ue.meshtoon_vert, fragmentShader: Ue.meshtoon_frag }, matcap: { uniforms: xt([ie.common, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.fog, { matcap: { value: null } }]), vertexShader: Ue.meshmatcap_vert, fragmentShader: Ue.meshmatcap_frag }, points: { uniforms: xt([ie.points, ie.fog]), vertexShader: Ue.points_vert, fragmentShader: Ue.points_frag }, dashed: { uniforms: xt([ie.common, ie.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Ue.linedashed_vert, fragmentShader: Ue.linedashed_frag }, depth: { uniforms: xt([ie.common, ie.displacementmap]), vertexShader: Ue.depth_vert, fragmentShader: Ue.depth_frag }, normal: { uniforms: xt([ie.common, ie.bumpmap, ie.normalmap, ie.displacementmap, { opacity: { value: 1 } }]), vertexShader: Ue.meshnormal_vert, fragmentShader: Ue.meshnormal_frag }, sprite: { uniforms: xt([ie.sprite, ie.fog]), vertexShader: Ue.sprite_vert, fragmentShader: Ue.sprite_frag }, background: { uniforms: { uvTransform: { value: new Le() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Ue.background_vert, fragmentShader: Ue.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Le() } }, vertexShader: Ue.backgroundCube_vert, fragmentShader: Ue.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Ue.cube_vert, fragmentShader: Ue.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Ue.equirect_vert, fragmentShader: Ue.equirect_frag }, distanceRGBA: { uniforms: xt([ie.common, ie.displacementmap, { referencePosition: { value: new B() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Ue.distanceRGBA_vert, fragmentShader: Ue.distanceRGBA_frag }, shadow: { uniforms: xt([ie.lights, ie.fog, { color: { value: new Xe(0) }, opacity: { value: 1 } }]), vertexShader: Ue.shadow_vert, fragmentShader: Ue.shadow_frag } };
Yt.physical = { uniforms: xt([Yt.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Le() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Le() }, clearcoatNormalScale: { value: new Ze(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Le() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Le() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Le() }, sheen: { value: 0 }, sheenColor: { value: new Xe(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Le() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Le() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Le() }, transmissionSamplerSize: { value: new Ze() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Le() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Xe(0) }, specularColor: { value: new Xe(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Le() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Le() }, anisotropyVector: { value: new Ze() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Le() } }]), vertexShader: Ue.meshphysical_vert, fragmentShader: Ue.meshphysical_frag };
const fr = { r: 0, b: 0, g: 0 }, Un = new un(), Wh = new ot();
function Xh(i3, e, t, n, r, s, a) {
  const o = new Xe(0);
  let l = s === true ? 0 : 1, c, u, h = null, f = 0, m = null;
  function g(b) {
    let y = b.isScene === true ? b.background : null;
    return y && y.isTexture && (y = (b.backgroundBlurriness > 0 ? t : e).get(y)), y;
  }
  function v(b) {
    let y = false;
    const U = g(b);
    U === null ? d(o, l) : U && U.isColor && (d(U, 1), y = true);
    const L = i3.xr.getEnvironmentBlendMode();
    L === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : L === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i3.autoClear || y) && (n.buffers.depth.setTest(true), n.buffers.depth.setMask(true), n.buffers.color.setMask(true), i3.clear(i3.autoClearColor, i3.autoClearDepth, i3.autoClearStencil));
  }
  function p(b, y) {
    const U = g(y);
    U && (U.isCubeTexture || U.mapping === Lr) ? (u === void 0 && (u = new Kt(new Ei(1, 1, 1), new En({ name: "BackgroundCubeMaterial", uniforms: xi(Yt.backgroundCube.uniforms), vertexShader: Yt.backgroundCube.vertexShader, fragmentShader: Yt.backgroundCube.fragmentShader, side: yt, depthTest: false, depthWrite: false, fog: false })), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(L, w, I) {
      this.matrixWorld.copyPosition(I.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), r.update(u)), Un.copy(y.backgroundRotation), Un.x *= -1, Un.y *= -1, Un.z *= -1, U.isCubeTexture && U.isRenderTargetTexture === false && (Un.y *= -1, Un.z *= -1), u.material.uniforms.envMap.value = U, u.material.uniforms.flipEnvMap.value = U.isCubeTexture && U.isRenderTargetTexture === false ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = y.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(Wh.makeRotationFromEuler(Un)), u.material.toneMapped = Ge.getTransfer(U.colorSpace) !== Ke, (h !== U || f !== U.version || m !== i3.toneMapping) && (u.material.needsUpdate = true, h = U, f = U.version, m = i3.toneMapping), u.layers.enableAll(), b.unshift(u, u.geometry, u.material, 0, 0, null)) : U && U.isTexture && (c === void 0 && (c = new Kt(new Ur(2, 2), new En({ name: "BackgroundMaterial", uniforms: xi(Yt.background.uniforms), vertexShader: Yt.background.vertexShader, fragmentShader: Yt.background.fragmentShader, side: Mn, depthTest: false, depthWrite: false, fog: false })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), r.update(c)), c.material.uniforms.t2D.value = U, c.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, c.material.toneMapped = Ge.getTransfer(U.colorSpace) !== Ke, U.matrixAutoUpdate === true && U.updateMatrix(), c.material.uniforms.uvTransform.value.copy(U.matrix), (h !== U || f !== U.version || m !== i3.toneMapping) && (c.material.needsUpdate = true, h = U, f = U.version, m = i3.toneMapping), c.layers.enableAll(), b.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function d(b, y) {
    b.getRGB(fr, cl(i3)), n.buffers.color.setClear(fr.r, fr.g, fr.b, y, a);
  }
  function A() {
    u !== void 0 && (u.geometry.dispose(), u.material.dispose(), u = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return { getClearColor: function() {
    return o;
  }, setClearColor: function(b, y = 1) {
    o.set(b), l = y, d(o, l);
  }, getClearAlpha: function() {
    return l;
  }, setClearAlpha: function(b) {
    l = b, d(o, l);
  }, render: v, addToRenderList: p, dispose: A };
}
function qh(i3, e) {
  const t = i3.getParameter(i3.MAX_VERTEX_ATTRIBS), n = {}, r = f(null);
  let s = r, a = false;
  function o(S, R, W, H, Z) {
    let j = false;
    const Y = h(H, W, R);
    s !== Y && (s = Y, c(s.object)), j = m(S, H, W, Z), j && g(S, H, W, Z), Z !== null && e.update(Z, i3.ELEMENT_ARRAY_BUFFER), (j || a) && (a = false, y(S, R, W, H), Z !== null && i3.bindBuffer(i3.ELEMENT_ARRAY_BUFFER, e.get(Z).buffer));
  }
  function l() {
    return i3.createVertexArray();
  }
  function c(S) {
    return i3.bindVertexArray(S);
  }
  function u(S) {
    return i3.deleteVertexArray(S);
  }
  function h(S, R, W) {
    const H = W.wireframe === true;
    let Z = n[S.id];
    Z === void 0 && (Z = {}, n[S.id] = Z);
    let j = Z[R.id];
    j === void 0 && (j = {}, Z[R.id] = j);
    let Y = j[H];
    return Y === void 0 && (Y = f(l()), j[H] = Y), Y;
  }
  function f(S) {
    const R = [], W = [], H = [];
    for (let Z = 0; Z < t; Z++) R[Z] = 0, W[Z] = 0, H[Z] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: R, enabledAttributes: W, attributeDivisors: H, object: S, attributes: {}, index: null };
  }
  function m(S, R, W, H) {
    const Z = s.attributes, j = R.attributes;
    let Y = 0;
    const Q = W.getAttributes();
    for (const V in Q) if (Q[V].location >= 0) {
      const he = Z[V];
      let Se = j[V];
      if (Se === void 0 && (V === "instanceMatrix" && S.instanceMatrix && (Se = S.instanceMatrix), V === "instanceColor" && S.instanceColor && (Se = S.instanceColor)), he === void 0 || he.attribute !== Se || Se && he.data !== Se.data) return true;
      Y++;
    }
    return s.attributesNum !== Y || s.index !== H;
  }
  function g(S, R, W, H) {
    const Z = {}, j = R.attributes;
    let Y = 0;
    const Q = W.getAttributes();
    for (const V in Q) if (Q[V].location >= 0) {
      let he = j[V];
      he === void 0 && (V === "instanceMatrix" && S.instanceMatrix && (he = S.instanceMatrix), V === "instanceColor" && S.instanceColor && (he = S.instanceColor));
      const Se = {};
      Se.attribute = he, he && he.data && (Se.data = he.data), Z[V] = Se, Y++;
    }
    s.attributes = Z, s.attributesNum = Y, s.index = H;
  }
  function v() {
    const S = s.newAttributes;
    for (let R = 0, W = S.length; R < W; R++) S[R] = 0;
  }
  function p(S) {
    d(S, 0);
  }
  function d(S, R) {
    const W = s.newAttributes, H = s.enabledAttributes, Z = s.attributeDivisors;
    W[S] = 1, H[S] === 0 && (i3.enableVertexAttribArray(S), H[S] = 1), Z[S] !== R && (i3.vertexAttribDivisor(S, R), Z[S] = R);
  }
  function A() {
    const S = s.newAttributes, R = s.enabledAttributes;
    for (let W = 0, H = R.length; W < H; W++) R[W] !== S[W] && (i3.disableVertexAttribArray(W), R[W] = 0);
  }
  function b(S, R, W, H, Z, j, Y) {
    Y === true ? i3.vertexAttribIPointer(S, R, W, Z, j) : i3.vertexAttribPointer(S, R, W, H, Z, j);
  }
  function y(S, R, W, H) {
    v();
    const Z = H.attributes, j = W.getAttributes(), Y = R.defaultAttributeValues;
    for (const Q in j) {
      const V = j[Q];
      if (V.location >= 0) {
        let ae = Z[Q];
        if (ae === void 0 && (Q === "instanceMatrix" && S.instanceMatrix && (ae = S.instanceMatrix), Q === "instanceColor" && S.instanceColor && (ae = S.instanceColor)), ae !== void 0) {
          const he = ae.normalized, Se = ae.itemSize, Ie = e.get(ae);
          if (Ie === void 0) continue;
          const je = Ie.buffer, X = Ie.type, ne = Ie.bytesPerElement, ge = X === i3.INT || X === i3.UNSIGNED_INT || ae.gpuType === ua;
          if (ae.isInterleavedBufferAttribute) {
            const oe = ae.data, Te = oe.stride, We = ae.offset;
            if (oe.isInstancedInterleavedBuffer) {
              for (let Ae = 0; Ae < V.locationSize; Ae++) d(V.location + Ae, oe.meshPerAttribute);
              S.isInstancedMesh !== true && H._maxInstanceCount === void 0 && (H._maxInstanceCount = oe.meshPerAttribute * oe.count);
            } else for (let Ae = 0; Ae < V.locationSize; Ae++) p(V.location + Ae);
            i3.bindBuffer(i3.ARRAY_BUFFER, je);
            for (let Ae = 0; Ae < V.locationSize; Ae++) b(V.location + Ae, Se / V.locationSize, X, he, Te * ne, (We + Se / V.locationSize * Ae) * ne, ge);
          } else {
            if (ae.isInstancedBufferAttribute) {
              for (let oe = 0; oe < V.locationSize; oe++) d(V.location + oe, ae.meshPerAttribute);
              S.isInstancedMesh !== true && H._maxInstanceCount === void 0 && (H._maxInstanceCount = ae.meshPerAttribute * ae.count);
            } else for (let oe = 0; oe < V.locationSize; oe++) p(V.location + oe);
            i3.bindBuffer(i3.ARRAY_BUFFER, je);
            for (let oe = 0; oe < V.locationSize; oe++) b(V.location + oe, Se / V.locationSize, X, he, Se * ne, Se / V.locationSize * oe * ne, ge);
          }
        } else if (Y !== void 0) {
          const he = Y[Q];
          if (he !== void 0) switch (he.length) {
            case 2:
              i3.vertexAttrib2fv(V.location, he);
              break;
            case 3:
              i3.vertexAttrib3fv(V.location, he);
              break;
            case 4:
              i3.vertexAttrib4fv(V.location, he);
              break;
            default:
              i3.vertexAttrib1fv(V.location, he);
          }
        }
      }
    }
    A();
  }
  function U() {
    I();
    for (const S in n) {
      const R = n[S];
      for (const W in R) {
        const H = R[W];
        for (const Z in H) u(H[Z].object), delete H[Z];
        delete R[W];
      }
      delete n[S];
    }
  }
  function L(S) {
    if (n[S.id] === void 0) return;
    const R = n[S.id];
    for (const W in R) {
      const H = R[W];
      for (const Z in H) u(H[Z].object), delete H[Z];
      delete R[W];
    }
    delete n[S.id];
  }
  function w(S) {
    for (const R in n) {
      const W = n[R];
      if (W[S.id] === void 0) continue;
      const H = W[S.id];
      for (const Z in H) u(H[Z].object), delete H[Z];
      delete W[S.id];
    }
  }
  function I() {
    M(), a = true, s !== r && (s = r, c(s.object));
  }
  function M() {
    r.geometry = null, r.program = null, r.wireframe = false;
  }
  return { setup: o, reset: I, resetDefaultState: M, dispose: U, releaseStatesOfGeometry: L, releaseStatesOfProgram: w, initAttributes: v, enableAttribute: p, disableUnusedAttributes: A };
}
function Yh(i3, e, t) {
  let n;
  function r(c) {
    n = c;
  }
  function s(c, u) {
    i3.drawArrays(n, c, u), t.update(u, n, 1);
  }
  function a(c, u, h) {
    h !== 0 && (i3.drawArraysInstanced(n, c, u, h), t.update(u, n, h));
  }
  function o(c, u, h) {
    if (h === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, u, 0, h);
    let m = 0;
    for (let g = 0; g < h; g++) m += u[g];
    t.update(m, n, 1);
  }
  function l(c, u, h, f) {
    if (h === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null) for (let g = 0; g < c.length; g++) a(c[g], u[g], f[g]);
    else {
      m.multiDrawArraysInstancedWEBGL(n, c, 0, u, 0, f, 0, h);
      let g = 0;
      for (let v = 0; v < h; v++) g += u[v] * f[v];
      t.update(g, n, 1);
    }
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function $h(i3, e, t, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === true) {
      const w = e.get("EXT_texture_filter_anisotropic");
      r = i3.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else r = 0;
    return r;
  }
  function a(w) {
    return !(w !== kt && n.convert(w) !== i3.getParameter(i3.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(w) {
    const I = w === Hi && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(w !== cn && n.convert(w) !== i3.getParameter(i3.IMPLEMENTATION_COLOR_READ_TYPE) && w !== an && !I);
  }
  function l(w) {
    if (w === "highp") {
      if (i3.getShaderPrecisionFormat(i3.VERTEX_SHADER, i3.HIGH_FLOAT).precision > 0 && i3.getShaderPrecisionFormat(i3.FRAGMENT_SHADER, i3.HIGH_FLOAT).precision > 0) return "highp";
      w = "mediump";
    }
    return w === "mediump" && i3.getShaderPrecisionFormat(i3.VERTEX_SHADER, i3.MEDIUM_FLOAT).precision > 0 && i3.getShaderPrecisionFormat(i3.FRAGMENT_SHADER, i3.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const u = l(c);
  u !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", u, "instead."), c = u);
  const h = t.logarithmicDepthBuffer === true, f = t.reverseDepthBuffer === true && e.has("EXT_clip_control"), m = i3.getParameter(i3.MAX_TEXTURE_IMAGE_UNITS), g = i3.getParameter(i3.MAX_VERTEX_TEXTURE_IMAGE_UNITS), v = i3.getParameter(i3.MAX_TEXTURE_SIZE), p = i3.getParameter(i3.MAX_CUBE_MAP_TEXTURE_SIZE), d = i3.getParameter(i3.MAX_VERTEX_ATTRIBS), A = i3.getParameter(i3.MAX_VERTEX_UNIFORM_VECTORS), b = i3.getParameter(i3.MAX_VARYING_VECTORS), y = i3.getParameter(i3.MAX_FRAGMENT_UNIFORM_VECTORS), U = g > 0, L = i3.getParameter(i3.MAX_SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: s, getMaxPrecision: l, textureFormatReadable: a, textureTypeReadable: o, precision: c, logarithmicDepthBuffer: h, reverseDepthBuffer: f, maxTextures: m, maxVertexTextures: g, maxTextureSize: v, maxCubemapSize: p, maxAttributes: d, maxVertexUniforms: A, maxVaryings: b, maxFragmentUniforms: y, vertexTextures: U, maxSamples: L };
}
function Kh(i3) {
  const e = this;
  let t = null, n = 0, r = false, s = false;
  const a = new Nn(), o = new Le(), l = { value: null, needsUpdate: false };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, f) {
    const m = h.length !== 0 || f || n !== 0 || r;
    return r = f, n = h.length, m;
  }, this.beginShadows = function() {
    s = true, u(null);
  }, this.endShadows = function() {
    s = false;
  }, this.setGlobalState = function(h, f) {
    t = u(h, f, 0);
  }, this.setState = function(h, f, m) {
    const g = h.clippingPlanes, v = h.clipIntersection, p = h.clipShadows, d = i3.get(h);
    if (!r || g === null || g.length === 0 || s && !p) s ? u(null) : c();
    else {
      const A = s ? 0 : n, b = A * 4;
      let y = d.clippingState || null;
      l.value = y, y = u(g, f, b, m);
      for (let U = 0; U !== b; ++U) y[U] = t[U];
      d.clippingState = y, this.numIntersection = v ? this.numPlanes : 0, this.numPlanes += A;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(h, f, m, g) {
    const v = h !== null ? h.length : 0;
    let p = null;
    if (v !== 0) {
      if (p = l.value, g !== true || p === null) {
        const d = m + v * 4, A = f.matrixWorldInverse;
        o.getNormalMatrix(A), (p === null || p.length < d) && (p = new Float32Array(d));
        for (let b = 0, y = m; b !== v; ++b, y += 4) a.copy(h[b]).applyMatrix4(A, o), a.normal.toArray(p, y), p[y + 3] = a.constant;
      }
      l.value = p, l.needsUpdate = true;
    }
    return e.numPlanes = v, e.numIntersection = 0, p;
  }
}
function Zh(i3) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === Ts ? a.mapping = pi : o === As && (a.mapping = mi), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === Ts || o === As) if (e.has(a)) {
        const l = e.get(a).texture;
        return t(l, a.mapping);
      } else {
        const l = a.image;
        if (l && l.height > 0) {
          const c = new Zc(l.height);
          return c.fromEquirectangularTexture(i3, a), e.set(a, c), a.addEventListener("dispose", r), t(c.texture, a.mapping);
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
const li = 4, io = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Bn = 20, cs = new au(), ro = new Xe();
let us = null, ds = 0, hs = 0, fs = false;
const Fn = (1 + Math.sqrt(5)) / 2, ri = 1 / Fn, so = [new B(-Fn, ri, 0), new B(Fn, ri, 0), new B(-ri, 0, Fn), new B(ri, 0, Fn), new B(0, Fn, -ri), new B(0, Fn, ri), new B(-1, 1, -1), new B(1, 1, -1), new B(-1, 1, 1), new B(1, 1, 1)];
class ao {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, r = 100) {
    us = this._renderer.getRenderTarget(), ds = this._renderer.getActiveCubeFace(), hs = this._renderer.getActiveMipmapLevel(), fs = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(256);
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
    this._cubemapMaterial === null && (this._cubemapMaterial = co(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = lo(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(us, ds, hs), this._renderer.xr.enabled = fs, e.scissorTest = false, pr(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === pi || e.mapping === mi ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), us = this._renderer.getRenderTarget(), ds = this._renderer.getActiveCubeFace(), hs = this._renderer.getActiveMipmapLevel(), fs = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = { magFilter: $t, minFilter: $t, generateMipmaps: false, type: Hi, format: kt, colorSpace: vi, depthBuffer: false }, r = oo(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = oo(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = jh(s)), this._blurMaterial = Jh(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Kt(this._lodPlanes[0], e);
    this._renderer.compile(t, cs);
  }
  _sceneToCubeUV(e, t, n, r) {
    const o = new It(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], u = this._renderer, h = u.autoClear, f = u.toneMapping;
    u.getClearColor(ro), u.toneMapping = Sn, u.autoClear = false;
    const m = new al({ name: "PMREM.Background", side: yt, depthWrite: false, depthTest: false }), g = new Kt(new Ei(), m);
    let v = false;
    const p = e.background;
    p ? p.isColor && (m.color.copy(p), e.background = null, v = true) : (m.color.copy(ro), v = true);
    for (let d = 0; d < 6; d++) {
      const A = d % 3;
      A === 0 ? (o.up.set(0, l[d], 0), o.lookAt(c[d], 0, 0)) : A === 1 ? (o.up.set(0, 0, l[d]), o.lookAt(0, c[d], 0)) : (o.up.set(0, l[d], 0), o.lookAt(0, 0, c[d]));
      const b = this._cubeSize;
      pr(r, A * b, d > 2 ? b : 0, b, b), u.setRenderTarget(r), v && u.render(g, o), u.render(e, o);
    }
    g.geometry.dispose(), g.material.dispose(), u.toneMapping = f, u.autoClear = h, e.background = p;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === pi || e.mapping === mi;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = co()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = lo());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, a = new Kt(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    pr(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, cs);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = false;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = so[(r - s - 1) % so.length];
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
    const u = 3, h = new Kt(this._lodPlanes[r], c), f = c.uniforms, m = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * Bn - 1), v = s / g, p = isFinite(s) ? 1 + Math.floor(u * v) : Bn;
    p > Bn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Bn}`);
    const d = [];
    let A = 0;
    for (let w = 0; w < Bn; ++w) {
      const I = w / v, M = Math.exp(-I * I / 2);
      d.push(M), w === 0 ? A += M : w < p && (A += 2 * M);
    }
    for (let w = 0; w < d.length; w++) d[w] = d[w] / A;
    f.envMap.value = e.texture, f.samples.value = p, f.weights.value = d, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: b } = this;
    f.dTheta.value = g, f.mipInt.value = b - n;
    const y = this._sizeLods[r], U = 3 * y * (r > b - li ? r - b + li : 0), L = 4 * (this._cubeSize - y);
    pr(t, U, L, 3 * y, 2 * y), l.setRenderTarget(t), l.render(h, cs);
  }
}
function jh(i3) {
  const e = [], t = [], n = [];
  let r = i3;
  const s = i3 - li + 1 + io.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    t.push(o);
    let l = 1 / o;
    a > i3 - li ? l = io[a - i3 + li - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), u = -c, h = 1 + c, f = [u, u, h, u, h, h, u, u, h, h, u, h], m = 6, g = 6, v = 3, p = 2, d = 1, A = new Float32Array(v * g * m), b = new Float32Array(p * g * m), y = new Float32Array(d * g * m);
    for (let L = 0; L < m; L++) {
      const w = L % 3 * 2 / 3 - 1, I = L > 2 ? 0 : -1, M = [w, I, 0, w + 2 / 3, I, 0, w + 2 / 3, I + 1, 0, w, I, 0, w + 2 / 3, I + 1, 0, w, I + 1, 0];
      A.set(M, v * g * L), b.set(f, p * g * L);
      const S = [L, L, L, L, L, L];
      y.set(S, d * g * L);
    }
    const U = new dn();
    U.setAttribute("position", new Zt(A, v)), U.setAttribute("uv", new Zt(b, p)), U.setAttribute("faceIndex", new Zt(y, d)), e.push(U), r > li && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function oo(i3, e, t) {
  const n = new Vn(i3, e, t);
  return n.texture.mapping = Lr, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
}
function pr(i3, e, t, n, r) {
  i3.viewport.set(e, t, n, r), i3.scissor.set(e, t, n, r);
}
function Jh(i3, e, t) {
  const n = new Float32Array(Bn), r = new B(0, 1, 0);
  return new En({ name: "SphericalGaussianBlur", defines: { n: Bn, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${i3}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: r } }, vertexShader: _a(), fragmentShader: `

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
		`, blending: xn, depthTest: false, depthWrite: false });
}
function lo() {
  return new En({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: _a(), fragmentShader: `

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
		`, blending: xn, depthTest: false, depthWrite: false });
}
function co() {
  return new En({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: _a(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: xn, depthTest: false, depthWrite: false });
}
function _a() {
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
function Qh(i3) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === Ts || l === As, u = l === pi || l === mi;
      if (c || u) {
        let h = e.get(o);
        const f = h !== void 0 ? h.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f) return t === null && (t = new ao(i3)), h = c ? t.fromEquirectangular(o, h) : t.fromCubemap(o, h), h.texture.pmremVersion = o.pmremVersion, e.set(o, h), h.texture;
        if (h !== void 0) return h.texture;
        {
          const m = o.image;
          return c && m && m.height > 0 || u && m && r(m) ? (t === null && (t = new ao(i3)), h = c ? t.fromEquirectangular(o) : t.fromCubemap(o), h.texture.pmremVersion = o.pmremVersion, e.set(o, h), o.addEventListener("dispose", s), h.texture) : null;
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
function ef(i3) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r = i3.getExtension("WEBGL_depth_texture") || i3.getExtension("MOZ_WEBGL_depth_texture") || i3.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = i3.getExtension("EXT_texture_filter_anisotropic") || i3.getExtension("MOZ_EXT_texture_filter_anisotropic") || i3.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = i3.getExtension("WEBGL_compressed_texture_s3tc") || i3.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i3.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = i3.getExtension("WEBGL_compressed_texture_pvrtc") || i3.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i3.getExtension(n);
    }
    return e[n] = r, r;
  }
  return { has: function(n) {
    return t(n) !== null;
  }, init: function() {
    t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
  }, get: function(n) {
    const r = t(n);
    return r === null && si("THREE.WebGLRenderer: " + n + " extension not supported."), r;
  } };
}
function tf(i3, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(h) {
    const f = h.target;
    f.index !== null && e.remove(f.index);
    for (const g in f.attributes) e.remove(f.attributes[g]);
    f.removeEventListener("dispose", a), delete r[f.id];
    const m = s.get(f);
    m && (e.remove(m), s.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === true && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function o(h, f) {
    return r[f.id] === true || (f.addEventListener("dispose", a), r[f.id] = true, t.memory.geometries++), f;
  }
  function l(h) {
    const f = h.attributes;
    for (const m in f) e.update(f[m], i3.ARRAY_BUFFER);
  }
  function c(h) {
    const f = [], m = h.index, g = h.attributes.position;
    let v = 0;
    if (m !== null) {
      const A = m.array;
      v = m.version;
      for (let b = 0, y = A.length; b < y; b += 3) {
        const U = A[b + 0], L = A[b + 1], w = A[b + 2];
        f.push(U, L, L, w, w, U);
      }
    } else if (g !== void 0) {
      const A = g.array;
      v = g.version;
      for (let b = 0, y = A.length / 3 - 1; b < y; b += 3) {
        const U = b + 0, L = b + 1, w = b + 2;
        f.push(U, L, L, w, w, U);
      }
    } else return;
    const p = new (el(f) ? ll : ol)(f, 1);
    p.version = v;
    const d = s.get(h);
    d && e.remove(d), s.set(h, p);
  }
  function u(h) {
    const f = s.get(h);
    if (f) {
      const m = h.index;
      m !== null && f.version < m.version && c(h);
    } else c(h);
    return s.get(h);
  }
  return { get: o, update: l, getWireframeAttribute: u };
}
function nf(i3, e, t) {
  let n;
  function r(f) {
    n = f;
  }
  let s, a;
  function o(f) {
    s = f.type, a = f.bytesPerElement;
  }
  function l(f, m) {
    i3.drawElements(n, m, s, f * a), t.update(m, n, 1);
  }
  function c(f, m, g) {
    g !== 0 && (i3.drawElementsInstanced(n, m, s, f * a, g), t.update(m, n, g));
  }
  function u(f, m, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, m, 0, s, f, 0, g);
    let p = 0;
    for (let d = 0; d < g; d++) p += m[d];
    t.update(p, n, 1);
  }
  function h(f, m, g, v) {
    if (g === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null) for (let d = 0; d < f.length; d++) c(f[d] / a, m[d], v[d]);
    else {
      p.multiDrawElementsInstancedWEBGL(n, m, 0, s, f, 0, v, 0, g);
      let d = 0;
      for (let A = 0; A < g; A++) d += m[A] * v[A];
      t.update(d, n, 1);
    }
  }
  this.setMode = r, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = u, this.renderMultiDrawInstances = h;
}
function rf(i3) {
  const e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, a, o) {
    switch (t.calls++, a) {
      case i3.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case i3.LINES:
        t.lines += o * (s / 2);
        break;
      case i3.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case i3.LINE_LOOP:
        t.lines += o * s;
        break;
      case i3.POINTS:
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
function sf(i3, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), r = new at();
  function s(a, o, l) {
    const c = a.morphTargetInfluences, u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, h = u !== void 0 ? u.length : 0;
    let f = n.get(o);
    if (f === void 0 || f.count !== h) {
      let S = function() {
        I.dispose(), n.delete(o), o.removeEventListener("dispose", S);
      };
      var m = S;
      f !== void 0 && f.texture.dispose();
      const g = o.morphAttributes.position !== void 0, v = o.morphAttributes.normal !== void 0, p = o.morphAttributes.color !== void 0, d = o.morphAttributes.position || [], A = o.morphAttributes.normal || [], b = o.morphAttributes.color || [];
      let y = 0;
      g === true && (y = 1), v === true && (y = 2), p === true && (y = 3);
      let U = o.attributes.position.count * y, L = 1;
      U > e.maxTextureSize && (L = Math.ceil(U / e.maxTextureSize), U = e.maxTextureSize);
      const w = new Float32Array(U * L * 4 * h), I = new nl(w, U, L, h);
      I.type = an, I.needsUpdate = true;
      const M = y * 4;
      for (let R = 0; R < h; R++) {
        const W = d[R], H = A[R], Z = b[R], j = U * L * 4 * R;
        for (let Y = 0; Y < W.count; Y++) {
          const Q = Y * M;
          g === true && (r.fromBufferAttribute(W, Y), w[j + Q + 0] = r.x, w[j + Q + 1] = r.y, w[j + Q + 2] = r.z, w[j + Q + 3] = 0), v === true && (r.fromBufferAttribute(H, Y), w[j + Q + 4] = r.x, w[j + Q + 5] = r.y, w[j + Q + 6] = r.z, w[j + Q + 7] = 0), p === true && (r.fromBufferAttribute(Z, Y), w[j + Q + 8] = r.x, w[j + Q + 9] = r.y, w[j + Q + 10] = r.z, w[j + Q + 11] = Z.itemSize === 4 ? r.w : 1);
        }
      }
      f = { count: h, texture: I, size: new Ze(U, L) }, n.set(o, f), o.addEventListener("dispose", S);
    }
    if (a.isInstancedMesh === true && a.morphTexture !== null) l.getUniforms().setValue(i3, "morphTexture", a.morphTexture, t);
    else {
      let g = 0;
      for (let p = 0; p < c.length; p++) g += c[p];
      const v = o.morphTargetsRelative ? 1 : 1 - g;
      l.getUniforms().setValue(i3, "morphTargetBaseInfluence", v), l.getUniforms().setValue(i3, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(i3, "morphTargetsTexture", f.texture, t), l.getUniforms().setValue(i3, "morphTargetsTextureSize", f.size);
  }
  return { update: s };
}
function af(i3, e, t, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, u = l.geometry, h = e.get(l, u);
    if (r.get(h) !== c && (e.update(h), r.set(h, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === false && l.addEventListener("dispose", o), r.get(l) !== c && (t.update(l.instanceMatrix, i3.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i3.ARRAY_BUFFER), r.set(l, c))), l.isSkinnedMesh) {
      const f = l.skeleton;
      r.get(f) !== c && (f.update(), r.set(f, c));
    }
    return h;
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
const _l = new bt(), uo = new pl(1, 1), gl = new nl(), vl = new Uc(), xl = new dl(), ho = [], fo = [], po = new Float32Array(16), mo = new Float32Array(9), _o = new Float32Array(4);
function yi(i3, e, t) {
  const n = i3[0];
  if (n <= 0 || n > 0) return i3;
  const r = e * t;
  let s = ho[r];
  if (s === void 0 && (s = new Float32Array(r), ho[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a) o += t, i3[a].toArray(s, o);
  }
  return s;
}
function ut(i3, e) {
  if (i3.length !== e.length) return false;
  for (let t = 0, n = i3.length; t < n; t++) if (i3[t] !== e[t]) return false;
  return true;
}
function dt(i3, e) {
  for (let t = 0, n = e.length; t < n; t++) i3[t] = e[t];
}
function Ir(i3, e) {
  let t = fo[e];
  t === void 0 && (t = new Int32Array(e), fo[e] = t);
  for (let n = 0; n !== e; ++n) t[n] = i3.allocateTextureUnit();
  return t;
}
function of(i3, e) {
  const t = this.cache;
  t[0] !== e && (i3.uniform1f(this.addr, e), t[0] = e);
}
function lf(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i3.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ut(t, e)) return;
    i3.uniform2fv(this.addr, e), dt(t, e);
  }
}
function cf(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i3.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i3.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (ut(t, e)) return;
    i3.uniform3fv(this.addr, e), dt(t, e);
  }
}
function uf(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i3.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ut(t, e)) return;
    i3.uniform4fv(this.addr, e), dt(t, e);
  }
}
function df(i3, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ut(t, e)) return;
    i3.uniformMatrix2fv(this.addr, false, e), dt(t, e);
  } else {
    if (ut(t, n)) return;
    _o.set(n), i3.uniformMatrix2fv(this.addr, false, _o), dt(t, n);
  }
}
function hf(i3, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ut(t, e)) return;
    i3.uniformMatrix3fv(this.addr, false, e), dt(t, e);
  } else {
    if (ut(t, n)) return;
    mo.set(n), i3.uniformMatrix3fv(this.addr, false, mo), dt(t, n);
  }
}
function ff(i3, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ut(t, e)) return;
    i3.uniformMatrix4fv(this.addr, false, e), dt(t, e);
  } else {
    if (ut(t, n)) return;
    po.set(n), i3.uniformMatrix4fv(this.addr, false, po), dt(t, n);
  }
}
function pf(i3, e) {
  const t = this.cache;
  t[0] !== e && (i3.uniform1i(this.addr, e), t[0] = e);
}
function mf(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i3.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ut(t, e)) return;
    i3.uniform2iv(this.addr, e), dt(t, e);
  }
}
function _f(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i3.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ut(t, e)) return;
    i3.uniform3iv(this.addr, e), dt(t, e);
  }
}
function gf(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i3.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ut(t, e)) return;
    i3.uniform4iv(this.addr, e), dt(t, e);
  }
}
function vf(i3, e) {
  const t = this.cache;
  t[0] !== e && (i3.uniform1ui(this.addr, e), t[0] = e);
}
function xf(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i3.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ut(t, e)) return;
    i3.uniform2uiv(this.addr, e), dt(t, e);
  }
}
function Sf(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i3.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ut(t, e)) return;
    i3.uniform3uiv(this.addr, e), dt(t, e);
  }
}
function Mf(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i3.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ut(t, e)) return;
    i3.uniform4uiv(this.addr, e), dt(t, e);
  }
}
function Ef(i3, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i3.uniform1i(this.addr, r), n[0] = r);
  let s;
  this.type === i3.SAMPLER_2D_SHADOW ? (uo.compareFunction = Qo, s = uo) : s = _l, t.setTexture2D(e || s, r);
}
function yf(i3, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i3.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || vl, r);
}
function bf(i3, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i3.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || xl, r);
}
function Tf(i3, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i3.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || gl, r);
}
function Af(i3) {
  switch (i3) {
    case 5126:
      return of;
    case 35664:
      return lf;
    case 35665:
      return cf;
    case 35666:
      return uf;
    case 35674:
      return df;
    case 35675:
      return hf;
    case 35676:
      return ff;
    case 5124:
    case 35670:
      return pf;
    case 35667:
    case 35671:
      return mf;
    case 35668:
    case 35672:
      return _f;
    case 35669:
    case 35673:
      return gf;
    case 5125:
      return vf;
    case 36294:
      return xf;
    case 36295:
      return Sf;
    case 36296:
      return Mf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Ef;
    case 35679:
    case 36299:
    case 36307:
      return yf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return bf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Tf;
  }
}
function wf(i3, e) {
  i3.uniform1fv(this.addr, e);
}
function Rf(i3, e) {
  const t = yi(e, this.size, 2);
  i3.uniform2fv(this.addr, t);
}
function Cf(i3, e) {
  const t = yi(e, this.size, 3);
  i3.uniform3fv(this.addr, t);
}
function Pf(i3, e) {
  const t = yi(e, this.size, 4);
  i3.uniform4fv(this.addr, t);
}
function Lf(i3, e) {
  const t = yi(e, this.size, 4);
  i3.uniformMatrix2fv(this.addr, false, t);
}
function Df(i3, e) {
  const t = yi(e, this.size, 9);
  i3.uniformMatrix3fv(this.addr, false, t);
}
function Uf(i3, e) {
  const t = yi(e, this.size, 16);
  i3.uniformMatrix4fv(this.addr, false, t);
}
function If(i3, e) {
  i3.uniform1iv(this.addr, e);
}
function Nf(i3, e) {
  i3.uniform2iv(this.addr, e);
}
function Ff(i3, e) {
  i3.uniform3iv(this.addr, e);
}
function Of(i3, e) {
  i3.uniform4iv(this.addr, e);
}
function Bf(i3, e) {
  i3.uniform1uiv(this.addr, e);
}
function zf(i3, e) {
  i3.uniform2uiv(this.addr, e);
}
function Hf(i3, e) {
  i3.uniform3uiv(this.addr, e);
}
function kf(i3, e) {
  i3.uniform4uiv(this.addr, e);
}
function Vf(i3, e, t) {
  const n = this.cache, r = e.length, s = Ir(t, r);
  ut(n, s) || (i3.uniform1iv(this.addr, s), dt(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture2D(e[a] || _l, s[a]);
}
function Gf(i3, e, t) {
  const n = this.cache, r = e.length, s = Ir(t, r);
  ut(n, s) || (i3.uniform1iv(this.addr, s), dt(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture3D(e[a] || vl, s[a]);
}
function Wf(i3, e, t) {
  const n = this.cache, r = e.length, s = Ir(t, r);
  ut(n, s) || (i3.uniform1iv(this.addr, s), dt(n, s));
  for (let a = 0; a !== r; ++a) t.setTextureCube(e[a] || xl, s[a]);
}
function Xf(i3, e, t) {
  const n = this.cache, r = e.length, s = Ir(t, r);
  ut(n, s) || (i3.uniform1iv(this.addr, s), dt(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture2DArray(e[a] || gl, s[a]);
}
function qf(i3) {
  switch (i3) {
    case 5126:
      return wf;
    case 35664:
      return Rf;
    case 35665:
      return Cf;
    case 35666:
      return Pf;
    case 35674:
      return Lf;
    case 35675:
      return Df;
    case 35676:
      return Uf;
    case 5124:
    case 35670:
      return If;
    case 35667:
    case 35671:
      return Nf;
    case 35668:
    case 35672:
      return Ff;
    case 35669:
    case 35673:
      return Of;
    case 5125:
      return Bf;
    case 36294:
      return zf;
    case 36295:
      return Hf;
    case 36296:
      return kf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Vf;
    case 35679:
    case 36299:
    case 36307:
      return Gf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Wf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Xf;
  }
}
class Yf {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Af(t.type);
  }
}
class $f {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = qf(t.type);
  }
}
class Kf {
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
const ps = /(\w+)(\])?(\[|\.)?/g;
function go(i3, e) {
  i3.seq.push(e), i3.map[e.id] = e;
}
function Zf(i3, e, t) {
  const n = i3.name, r = n.length;
  for (ps.lastIndex = 0; ; ) {
    const s = ps.exec(n), a = ps.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === r) {
      go(t, c === void 0 ? new Yf(o, i3, e) : new $f(o, i3, e));
      break;
    } else {
      let h = t.map[o];
      h === void 0 && (h = new Kf(o), go(t, h)), t = h;
    }
  }
}
class yr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r), a = e.getUniformLocation(t, s.name);
      Zf(s, a, this);
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
function vo(i3, e, t) {
  const n = i3.createShader(e);
  return i3.shaderSource(n, t), i3.compileShader(n), n;
}
const jf = 37297;
let Jf = 0;
function Qf(i3, e) {
  const t = i3.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const xo = new Le();
function ep(i3) {
  Ge._getMatrix(xo, Ge.workingColorSpace, i3);
  const e = `mat3( ${xo.elements.map((t) => t.toFixed(4))} )`;
  switch (Ge.getTransfer(i3)) {
    case br:
      return [e, "LinearTransferOETF"];
    case Ke:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", i3), [e, "LinearTransferOETF"];
  }
}
function So(i3, e, t) {
  const n = i3.getShaderParameter(e, i3.COMPILE_STATUS), r = i3.getShaderInfoLog(e).trim();
  if (n && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const a = parseInt(s[1]);
    return t.toUpperCase() + `

` + r + `

` + Qf(i3.getShaderSource(e), a);
  } else return r;
}
function tp(i3, e) {
  const t = ep(e);
  return [`vec4 ${i3}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`);
}
function np(i3, e) {
  let t;
  switch (e) {
    case sc:
      t = "Linear";
      break;
    case ac:
      t = "Reinhard";
      break;
    case oc:
      t = "Cineon";
      break;
    case lc:
      t = "ACESFilmic";
      break;
    case uc:
      t = "AgX";
      break;
    case dc:
      t = "Neutral";
      break;
    case cc:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i3 + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const mr = new B();
function ip() {
  Ge.getLuminanceCoefficients(mr);
  const i3 = mr.x.toFixed(4), e = mr.y.toFixed(4), t = mr.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${i3}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function rp(i3) {
  return [i3.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", i3.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Ui).join(`
`);
}
function sp(i3) {
  const e = [];
  for (const t in i3) {
    const n = i3[t];
    n !== false && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function ap(i3, e) {
  const t = {}, n = i3.getProgramParameter(e, i3.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i3.getActiveAttrib(e, r), a = s.name;
    let o = 1;
    s.type === i3.FLOAT_MAT2 && (o = 2), s.type === i3.FLOAT_MAT3 && (o = 3), s.type === i3.FLOAT_MAT4 && (o = 4), t[a] = { type: s.type, location: i3.getAttribLocation(e, a), locationSize: o };
  }
  return t;
}
function Ui(i3) {
  return i3 !== "";
}
function Mo(i3, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i3.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Eo(i3, e) {
  return i3.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const op = /^[ \t]*#include +<([\w\d./]+)>/gm;
function na(i3) {
  return i3.replace(op, cp);
}
const lp = /* @__PURE__ */ new Map();
function cp(i3, e) {
  let t = Ue[e];
  if (t === void 0) {
    const n = lp.get(e);
    if (n !== void 0) t = Ue[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return na(t);
}
const up = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function yo(i3) {
  return i3.replace(up, dp);
}
function dp(i3, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++) r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function bo(i3) {
  let e = `precision ${i3.precision} float;
	precision ${i3.precision} int;
	precision ${i3.precision} sampler2D;
	precision ${i3.precision} samplerCube;
	precision ${i3.precision} sampler3D;
	precision ${i3.precision} sampler2DArray;
	precision ${i3.precision} sampler2DShadow;
	precision ${i3.precision} samplerCubeShadow;
	precision ${i3.precision} sampler2DArrayShadow;
	precision ${i3.precision} isampler2D;
	precision ${i3.precision} isampler3D;
	precision ${i3.precision} isamplerCube;
	precision ${i3.precision} isampler2DArray;
	precision ${i3.precision} usampler2D;
	precision ${i3.precision} usampler3D;
	precision ${i3.precision} usamplerCube;
	precision ${i3.precision} usampler2DArray;
	`;
  return i3.precision === "highp" ? e += `
#define HIGH_PRECISION` : i3.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i3.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function hp(i3) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i3.shadowMapType === zo ? e = "SHADOWMAP_TYPE_PCF" : i3.shadowMapType === Bl ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i3.shadowMapType === rn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function fp(i3) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i3.envMap) switch (i3.envMapMode) {
    case pi:
    case mi:
      e = "ENVMAP_TYPE_CUBE";
      break;
    case Lr:
      e = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return e;
}
function pp(i3) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i3.envMap) switch (i3.envMapMode) {
    case mi:
      e = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return e;
}
function mp(i3) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i3.envMap) switch (i3.combine) {
    case Ho:
      e = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case ic:
      e = "ENVMAP_BLENDING_MIX";
      break;
    case rc:
      e = "ENVMAP_BLENDING_ADD";
      break;
  }
  return e;
}
function _p(i3) {
  const e = i3.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function gp(i3, e, t, n) {
  const r = i3.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = hp(t), c = fp(t), u = pp(t), h = mp(t), f = _p(t), m = rp(t), g = sp(s), v = r.createProgram();
  let p, d, A = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(Ui).join(`
`), p.length > 0 && (p += `
`), d = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(Ui).join(`
`), d.length > 0 && (d += `
`)) : (p = [bo(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + u : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === false ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Ui).join(`
`), d = [bo(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + u : "", t.envMap ? "#define " + h : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== Sn ? "#define TONE_MAPPING" : "", t.toneMapping !== Sn ? Ue.tonemapping_pars_fragment : "", t.toneMapping !== Sn ? np("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Ue.colorspace_pars_fragment, tp("linearToOutputTexel", t.outputColorSpace), ip(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(Ui).join(`
`)), a = na(a), a = Mo(a, t), a = Eo(a, t), o = na(o), o = Mo(o, t), o = Eo(o, t), a = yo(a), o = yo(o), t.isRawShaderMaterial !== true && (A = `#version 300 es
`, p = [m, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + p, d = ["#define varying in", t.glslVersion === Ia ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === Ia ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + d);
  const b = A + p + a, y = A + d + o, U = vo(r, r.VERTEX_SHADER, b), L = vo(r, r.FRAGMENT_SHADER, y);
  r.attachShader(v, U), r.attachShader(v, L), t.index0AttributeName !== void 0 ? r.bindAttribLocation(v, 0, t.index0AttributeName) : t.morphTargets === true && r.bindAttribLocation(v, 0, "position"), r.linkProgram(v);
  function w(R) {
    if (i3.debug.checkShaderErrors) {
      const W = r.getProgramInfoLog(v).trim(), H = r.getShaderInfoLog(U).trim(), Z = r.getShaderInfoLog(L).trim();
      let j = true, Y = true;
      if (r.getProgramParameter(v, r.LINK_STATUS) === false) if (j = false, typeof i3.debug.onShaderError == "function") i3.debug.onShaderError(r, v, U, L);
      else {
        const Q = So(r, U, "vertex"), V = So(r, L, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(v, r.VALIDATE_STATUS) + `

Material Name: ` + R.name + `
Material Type: ` + R.type + `

Program Info Log: ` + W + `
` + Q + `
` + V);
      }
      else W !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", W) : (H === "" || Z === "") && (Y = false);
      Y && (R.diagnostics = { runnable: j, programLog: W, vertexShader: { log: H, prefix: p }, fragmentShader: { log: Z, prefix: d } });
    }
    r.deleteShader(U), r.deleteShader(L), I = new yr(r, v), M = ap(r, v);
  }
  let I;
  this.getUniforms = function() {
    return I === void 0 && w(this), I;
  };
  let M;
  this.getAttributes = function() {
    return M === void 0 && w(this), M;
  };
  let S = t.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return S === false && (S = r.getProgramParameter(v, jf)), S;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(v), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Jf++, this.cacheKey = e, this.usedTimes = 1, this.program = v, this.vertexShader = U, this.fragmentShader = L, this;
}
let vp = 0;
class xp {
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
    return n === void 0 && (n = new Sp(e), t.set(e, n)), n;
  }
}
class Sp {
  constructor(e) {
    this.id = vp++, this.code = e, this.usedTimes = 0;
  }
}
function Mp(i3, e, t, n, r, s, a) {
  const o = new rl(), l = new xp(), c = /* @__PURE__ */ new Set(), u = [], h = r.logarithmicDepthBuffer, f = r.vertexTextures;
  let m = r.precision;
  const g = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function v(M) {
    return c.add(M), M === 0 ? "uv" : `uv${M}`;
  }
  function p(M, S, R, W, H) {
    const Z = W.fog, j = H.geometry, Y = M.isMeshStandardMaterial ? W.environment : null, Q = (M.isMeshStandardMaterial ? t : e).get(M.envMap || Y), V = Q && Q.mapping === Lr ? Q.image.height : null, ae = g[M.type];
    M.precision !== null && (m = r.getMaxPrecision(M.precision), m !== M.precision && console.warn("THREE.WebGLProgram.getParameters:", M.precision, "not supported, using", m, "instead."));
    const he = j.morphAttributes.position || j.morphAttributes.normal || j.morphAttributes.color, Se = he !== void 0 ? he.length : 0;
    let Ie = 0;
    j.morphAttributes.position !== void 0 && (Ie = 1), j.morphAttributes.normal !== void 0 && (Ie = 2), j.morphAttributes.color !== void 0 && (Ie = 3);
    let je, X, ne, ge;
    if (ae) {
      const $e = Yt[ae];
      je = $e.vertexShader, X = $e.fragmentShader;
    } else je = M.vertexShader, X = M.fragmentShader, l.update(M), ne = l.getVertexShaderID(M), ge = l.getFragmentShaderID(M);
    const oe = i3.getRenderTarget(), Te = i3.state.buffers.depth.getReversed(), We = H.isInstancedMesh === true, Ae = H.isBatchedMesh === true, st = !!M.map, nt = !!M.matcap, Fe = !!Q, T = !!M.aoMap, Ct = !!M.lightMap, Oe = !!M.bumpMap, Be = !!M.normalMap, Me = !!M.displacementMap, et = !!M.emissiveMap, xe = !!M.metalnessMap, E = !!M.roughnessMap, _ = M.anisotropy > 0, N = M.clearcoat > 0, $ = M.dispersion > 0, J = M.iridescence > 0, G = M.sheen > 0, ve = M.transmission > 0, le = _ && !!M.anisotropyMap, fe = N && !!M.clearcoatMap, He = N && !!M.clearcoatNormalMap, te = N && !!M.clearcoatRoughnessMap, pe = J && !!M.iridescenceMap, be = J && !!M.iridescenceThicknessMap, we = G && !!M.sheenColorMap, me = G && !!M.sheenRoughnessMap, ze = !!M.specularMap, De = !!M.specularColorMap, Je = !!M.specularIntensityMap, C = ve && !!M.transmissionMap, re = ve && !!M.thicknessMap, k = !!M.gradientMap, K = !!M.alphaMap, ue = M.alphaTest > 0, ce = !!M.alphaHash, Pe = !!M.extensions;
    let it = Sn;
    M.toneMapped && (oe === null || oe.isXRRenderTarget === true) && (it = i3.toneMapping);
    const mt = { shaderID: ae, shaderType: M.type, shaderName: M.name, vertexShader: je, fragmentShader: X, defines: M.defines, customVertexShaderID: ne, customFragmentShaderID: ge, isRawShaderMaterial: M.isRawShaderMaterial === true, glslVersion: M.glslVersion, precision: m, batching: Ae, batchingColor: Ae && H._colorsTexture !== null, instancing: We, instancingColor: We && H.instanceColor !== null, instancingMorph: We && H.morphTexture !== null, supportsVertexTextures: f, outputColorSpace: oe === null ? i3.outputColorSpace : oe.isXRRenderTarget === true ? oe.texture.colorSpace : vi, alphaToCoverage: !!M.alphaToCoverage, map: st, matcap: nt, envMap: Fe, envMapMode: Fe && Q.mapping, envMapCubeUVHeight: V, aoMap: T, lightMap: Ct, bumpMap: Oe, normalMap: Be, displacementMap: f && Me, emissiveMap: et, normalMapObjectSpace: Be && M.normalMapType === mc, normalMapTangentSpace: Be && M.normalMapType === Jo, metalnessMap: xe, roughnessMap: E, anisotropy: _, anisotropyMap: le, clearcoat: N, clearcoatMap: fe, clearcoatNormalMap: He, clearcoatRoughnessMap: te, dispersion: $, iridescence: J, iridescenceMap: pe, iridescenceThicknessMap: be, sheen: G, sheenColorMap: we, sheenRoughnessMap: me, specularMap: ze, specularColorMap: De, specularIntensityMap: Je, transmission: ve, transmissionMap: C, thicknessMap: re, gradientMap: k, opaque: M.transparent === false && M.blending === ui && M.alphaToCoverage === false, alphaMap: K, alphaTest: ue, alphaHash: ce, combine: M.combine, mapUv: st && v(M.map.channel), aoMapUv: T && v(M.aoMap.channel), lightMapUv: Ct && v(M.lightMap.channel), bumpMapUv: Oe && v(M.bumpMap.channel), normalMapUv: Be && v(M.normalMap.channel), displacementMapUv: Me && v(M.displacementMap.channel), emissiveMapUv: et && v(M.emissiveMap.channel), metalnessMapUv: xe && v(M.metalnessMap.channel), roughnessMapUv: E && v(M.roughnessMap.channel), anisotropyMapUv: le && v(M.anisotropyMap.channel), clearcoatMapUv: fe && v(M.clearcoatMap.channel), clearcoatNormalMapUv: He && v(M.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: te && v(M.clearcoatRoughnessMap.channel), iridescenceMapUv: pe && v(M.iridescenceMap.channel), iridescenceThicknessMapUv: be && v(M.iridescenceThicknessMap.channel), sheenColorMapUv: we && v(M.sheenColorMap.channel), sheenRoughnessMapUv: me && v(M.sheenRoughnessMap.channel), specularMapUv: ze && v(M.specularMap.channel), specularColorMapUv: De && v(M.specularColorMap.channel), specularIntensityMapUv: Je && v(M.specularIntensityMap.channel), transmissionMapUv: C && v(M.transmissionMap.channel), thicknessMapUv: re && v(M.thicknessMap.channel), alphaMapUv: K && v(M.alphaMap.channel), vertexTangents: !!j.attributes.tangent && (Be || _), vertexColors: M.vertexColors, vertexAlphas: M.vertexColors === true && !!j.attributes.color && j.attributes.color.itemSize === 4, pointsUvs: H.isPoints === true && !!j.attributes.uv && (st || K), fog: !!Z, useFog: M.fog === true, fogExp2: !!Z && Z.isFogExp2, flatShading: M.flatShading === true, sizeAttenuation: M.sizeAttenuation === true, logarithmicDepthBuffer: h, reverseDepthBuffer: Te, skinning: H.isSkinnedMesh === true, morphTargets: j.morphAttributes.position !== void 0, morphNormals: j.morphAttributes.normal !== void 0, morphColors: j.morphAttributes.color !== void 0, morphTargetsCount: Se, morphTextureStride: Ie, numDirLights: S.directional.length, numPointLights: S.point.length, numSpotLights: S.spot.length, numSpotLightMaps: S.spotLightMap.length, numRectAreaLights: S.rectArea.length, numHemiLights: S.hemi.length, numDirLightShadows: S.directionalShadowMap.length, numPointLightShadows: S.pointShadowMap.length, numSpotLightShadows: S.spotShadowMap.length, numSpotLightShadowsWithMaps: S.numSpotLightShadowsWithMaps, numLightProbes: S.numLightProbes, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: M.dithering, shadowMapEnabled: i3.shadowMap.enabled && R.length > 0, shadowMapType: i3.shadowMap.type, toneMapping: it, decodeVideoTexture: st && M.map.isVideoTexture === true && Ge.getTransfer(M.map.colorSpace) === Ke, decodeVideoTextureEmissive: et && M.emissiveMap.isVideoTexture === true && Ge.getTransfer(M.emissiveMap.colorSpace) === Ke, premultipliedAlpha: M.premultipliedAlpha, doubleSided: M.side === sn, flipSided: M.side === yt, useDepthPacking: M.depthPacking >= 0, depthPacking: M.depthPacking || 0, index0AttributeName: M.index0AttributeName, extensionClipCullDistance: Pe && M.extensions.clipCullDistance === true && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (Pe && M.extensions.multiDraw === true || Ae) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: M.customProgramCacheKey() };
    return mt.vertexUv1s = c.has(1), mt.vertexUv2s = c.has(2), mt.vertexUv3s = c.has(3), c.clear(), mt;
  }
  function d(M) {
    const S = [];
    if (M.shaderID ? S.push(M.shaderID) : (S.push(M.customVertexShaderID), S.push(M.customFragmentShaderID)), M.defines !== void 0) for (const R in M.defines) S.push(R), S.push(M.defines[R]);
    return M.isRawShaderMaterial === false && (A(S, M), b(S, M), S.push(i3.outputColorSpace)), S.push(M.customProgramCacheKey), S.join();
  }
  function A(M, S) {
    M.push(S.precision), M.push(S.outputColorSpace), M.push(S.envMapMode), M.push(S.envMapCubeUVHeight), M.push(S.mapUv), M.push(S.alphaMapUv), M.push(S.lightMapUv), M.push(S.aoMapUv), M.push(S.bumpMapUv), M.push(S.normalMapUv), M.push(S.displacementMapUv), M.push(S.emissiveMapUv), M.push(S.metalnessMapUv), M.push(S.roughnessMapUv), M.push(S.anisotropyMapUv), M.push(S.clearcoatMapUv), M.push(S.clearcoatNormalMapUv), M.push(S.clearcoatRoughnessMapUv), M.push(S.iridescenceMapUv), M.push(S.iridescenceThicknessMapUv), M.push(S.sheenColorMapUv), M.push(S.sheenRoughnessMapUv), M.push(S.specularMapUv), M.push(S.specularColorMapUv), M.push(S.specularIntensityMapUv), M.push(S.transmissionMapUv), M.push(S.thicknessMapUv), M.push(S.combine), M.push(S.fogExp2), M.push(S.sizeAttenuation), M.push(S.morphTargetsCount), M.push(S.morphAttributeCount), M.push(S.numDirLights), M.push(S.numPointLights), M.push(S.numSpotLights), M.push(S.numSpotLightMaps), M.push(S.numHemiLights), M.push(S.numRectAreaLights), M.push(S.numDirLightShadows), M.push(S.numPointLightShadows), M.push(S.numSpotLightShadows), M.push(S.numSpotLightShadowsWithMaps), M.push(S.numLightProbes), M.push(S.shadowMapType), M.push(S.toneMapping), M.push(S.numClippingPlanes), M.push(S.numClipIntersection), M.push(S.depthPacking);
  }
  function b(M, S) {
    o.disableAll(), S.supportsVertexTextures && o.enable(0), S.instancing && o.enable(1), S.instancingColor && o.enable(2), S.instancingMorph && o.enable(3), S.matcap && o.enable(4), S.envMap && o.enable(5), S.normalMapObjectSpace && o.enable(6), S.normalMapTangentSpace && o.enable(7), S.clearcoat && o.enable(8), S.iridescence && o.enable(9), S.alphaTest && o.enable(10), S.vertexColors && o.enable(11), S.vertexAlphas && o.enable(12), S.vertexUv1s && o.enable(13), S.vertexUv2s && o.enable(14), S.vertexUv3s && o.enable(15), S.vertexTangents && o.enable(16), S.anisotropy && o.enable(17), S.alphaHash && o.enable(18), S.batching && o.enable(19), S.dispersion && o.enable(20), S.batchingColor && o.enable(21), M.push(o.mask), o.disableAll(), S.fog && o.enable(0), S.useFog && o.enable(1), S.flatShading && o.enable(2), S.logarithmicDepthBuffer && o.enable(3), S.reverseDepthBuffer && o.enable(4), S.skinning && o.enable(5), S.morphTargets && o.enable(6), S.morphNormals && o.enable(7), S.morphColors && o.enable(8), S.premultipliedAlpha && o.enable(9), S.shadowMapEnabled && o.enable(10), S.doubleSided && o.enable(11), S.flipSided && o.enable(12), S.useDepthPacking && o.enable(13), S.dithering && o.enable(14), S.transmission && o.enable(15), S.sheen && o.enable(16), S.opaque && o.enable(17), S.pointsUvs && o.enable(18), S.decodeVideoTexture && o.enable(19), S.decodeVideoTextureEmissive && o.enable(20), S.alphaToCoverage && o.enable(21), M.push(o.mask);
  }
  function y(M) {
    const S = g[M.type];
    let R;
    if (S) {
      const W = Yt[S];
      R = qc.clone(W.uniforms);
    } else R = M.uniforms;
    return R;
  }
  function U(M, S) {
    let R;
    for (let W = 0, H = u.length; W < H; W++) {
      const Z = u[W];
      if (Z.cacheKey === S) {
        R = Z, ++R.usedTimes;
        break;
      }
    }
    return R === void 0 && (R = new gp(i3, S, M, s), u.push(R)), R;
  }
  function L(M) {
    if (--M.usedTimes === 0) {
      const S = u.indexOf(M);
      u[S] = u[u.length - 1], u.pop(), M.destroy();
    }
  }
  function w(M) {
    l.remove(M);
  }
  function I() {
    l.dispose();
  }
  return { getParameters: p, getProgramCacheKey: d, getUniforms: y, acquireProgram: U, releaseProgram: L, releaseShaderCache: w, programs: u, dispose: I };
}
function Ep() {
  let i3 = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return i3.has(a);
  }
  function t(a) {
    let o = i3.get(a);
    return o === void 0 && (o = {}, i3.set(a, o)), o;
  }
  function n(a) {
    i3.delete(a);
  }
  function r(a, o, l) {
    i3.get(a)[o] = l;
  }
  function s() {
    i3 = /* @__PURE__ */ new WeakMap();
  }
  return { has: e, get: t, remove: n, update: r, dispose: s };
}
function yp(i3, e) {
  return i3.groupOrder !== e.groupOrder ? i3.groupOrder - e.groupOrder : i3.renderOrder !== e.renderOrder ? i3.renderOrder - e.renderOrder : i3.material.id !== e.material.id ? i3.material.id - e.material.id : i3.z !== e.z ? i3.z - e.z : i3.id - e.id;
}
function To(i3, e) {
  return i3.groupOrder !== e.groupOrder ? i3.groupOrder - e.groupOrder : i3.renderOrder !== e.renderOrder ? i3.renderOrder - e.renderOrder : i3.z !== e.z ? e.z - i3.z : i3.id - e.id;
}
function Ao() {
  const i3 = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function a(h, f, m, g, v, p) {
    let d = i3[e];
    return d === void 0 ? (d = { id: h.id, object: h, geometry: f, material: m, groupOrder: g, renderOrder: h.renderOrder, z: v, group: p }, i3[e] = d) : (d.id = h.id, d.object = h, d.geometry = f, d.material = m, d.groupOrder = g, d.renderOrder = h.renderOrder, d.z = v, d.group = p), e++, d;
  }
  function o(h, f, m, g, v, p) {
    const d = a(h, f, m, g, v, p);
    m.transmission > 0 ? n.push(d) : m.transparent === true ? r.push(d) : t.push(d);
  }
  function l(h, f, m, g, v, p) {
    const d = a(h, f, m, g, v, p);
    m.transmission > 0 ? n.unshift(d) : m.transparent === true ? r.unshift(d) : t.unshift(d);
  }
  function c(h, f) {
    t.length > 1 && t.sort(h || yp), n.length > 1 && n.sort(f || To), r.length > 1 && r.sort(f || To);
  }
  function u() {
    for (let h = e, f = i3.length; h < f; h++) {
      const m = i3[h];
      if (m.id === null) break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return { opaque: t, transmissive: n, transparent: r, init: s, push: o, unshift: l, finish: u, sort: c };
}
function bp() {
  let i3 = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i3.get(n);
    let a;
    return s === void 0 ? (a = new Ao(), i3.set(n, [a])) : r >= s.length ? (a = new Ao(), s.push(a)) : a = s[r], a;
  }
  function t() {
    i3 = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: t };
}
function Tp() {
  const i3 = {};
  return { get: function(e) {
    if (i3[e.id] !== void 0) return i3[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { direction: new B(), color: new Xe() };
        break;
      case "SpotLight":
        t = { position: new B(), direction: new B(), color: new Xe(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        t = { position: new B(), color: new Xe(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        t = { direction: new B(), skyColor: new Xe(), groundColor: new Xe() };
        break;
      case "RectAreaLight":
        t = { color: new Xe(), position: new B(), halfWidth: new B(), halfHeight: new B() };
        break;
    }
    return i3[e.id] = t, t;
  } };
}
function Ap() {
  const i3 = {};
  return { get: function(e) {
    if (i3[e.id] !== void 0) return i3[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Ze() };
        break;
      case "SpotLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Ze() };
        break;
      case "PointLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Ze(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return i3[e.id] = t, t;
  } };
}
let wp = 0;
function Rp(i3, e) {
  return (e.castShadow ? 2 : 0) - (i3.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i3.map ? 1 : 0);
}
function Cp(i3) {
  const e = new Tp(), t = Ap(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let c = 0; c < 9; c++) n.probe.push(new B());
  const r = new B(), s = new ot(), a = new ot();
  function o(c) {
    let u = 0, h = 0, f = 0;
    for (let M = 0; M < 9; M++) n.probe[M].set(0, 0, 0);
    let m = 0, g = 0, v = 0, p = 0, d = 0, A = 0, b = 0, y = 0, U = 0, L = 0, w = 0;
    c.sort(Rp);
    for (let M = 0, S = c.length; M < S; M++) {
      const R = c[M], W = R.color, H = R.intensity, Z = R.distance, j = R.shadow && R.shadow.map ? R.shadow.map.texture : null;
      if (R.isAmbientLight) u += W.r * H, h += W.g * H, f += W.b * H;
      else if (R.isLightProbe) {
        for (let Y = 0; Y < 9; Y++) n.probe[Y].addScaledVector(R.sh.coefficients[Y], H);
        w++;
      } else if (R.isDirectionalLight) {
        const Y = e.get(R);
        if (Y.color.copy(R.color).multiplyScalar(R.intensity), R.castShadow) {
          const Q = R.shadow, V = t.get(R);
          V.shadowIntensity = Q.intensity, V.shadowBias = Q.bias, V.shadowNormalBias = Q.normalBias, V.shadowRadius = Q.radius, V.shadowMapSize = Q.mapSize, n.directionalShadow[m] = V, n.directionalShadowMap[m] = j, n.directionalShadowMatrix[m] = R.shadow.matrix, A++;
        }
        n.directional[m] = Y, m++;
      } else if (R.isSpotLight) {
        const Y = e.get(R);
        Y.position.setFromMatrixPosition(R.matrixWorld), Y.color.copy(W).multiplyScalar(H), Y.distance = Z, Y.coneCos = Math.cos(R.angle), Y.penumbraCos = Math.cos(R.angle * (1 - R.penumbra)), Y.decay = R.decay, n.spot[v] = Y;
        const Q = R.shadow;
        if (R.map && (n.spotLightMap[U] = R.map, U++, Q.updateMatrices(R), R.castShadow && L++), n.spotLightMatrix[v] = Q.matrix, R.castShadow) {
          const V = t.get(R);
          V.shadowIntensity = Q.intensity, V.shadowBias = Q.bias, V.shadowNormalBias = Q.normalBias, V.shadowRadius = Q.radius, V.shadowMapSize = Q.mapSize, n.spotShadow[v] = V, n.spotShadowMap[v] = j, y++;
        }
        v++;
      } else if (R.isRectAreaLight) {
        const Y = e.get(R);
        Y.color.copy(W).multiplyScalar(H), Y.halfWidth.set(R.width * 0.5, 0, 0), Y.halfHeight.set(0, R.height * 0.5, 0), n.rectArea[p] = Y, p++;
      } else if (R.isPointLight) {
        const Y = e.get(R);
        if (Y.color.copy(R.color).multiplyScalar(R.intensity), Y.distance = R.distance, Y.decay = R.decay, R.castShadow) {
          const Q = R.shadow, V = t.get(R);
          V.shadowIntensity = Q.intensity, V.shadowBias = Q.bias, V.shadowNormalBias = Q.normalBias, V.shadowRadius = Q.radius, V.shadowMapSize = Q.mapSize, V.shadowCameraNear = Q.camera.near, V.shadowCameraFar = Q.camera.far, n.pointShadow[g] = V, n.pointShadowMap[g] = j, n.pointShadowMatrix[g] = R.shadow.matrix, b++;
        }
        n.point[g] = Y, g++;
      } else if (R.isHemisphereLight) {
        const Y = e.get(R);
        Y.skyColor.copy(R.color).multiplyScalar(H), Y.groundColor.copy(R.groundColor).multiplyScalar(H), n.hemi[d] = Y, d++;
      }
    }
    p > 0 && (i3.has("OES_texture_float_linear") === true ? (n.rectAreaLTC1 = ie.LTC_FLOAT_1, n.rectAreaLTC2 = ie.LTC_FLOAT_2) : (n.rectAreaLTC1 = ie.LTC_HALF_1, n.rectAreaLTC2 = ie.LTC_HALF_2)), n.ambient[0] = u, n.ambient[1] = h, n.ambient[2] = f;
    const I = n.hash;
    (I.directionalLength !== m || I.pointLength !== g || I.spotLength !== v || I.rectAreaLength !== p || I.hemiLength !== d || I.numDirectionalShadows !== A || I.numPointShadows !== b || I.numSpotShadows !== y || I.numSpotMaps !== U || I.numLightProbes !== w) && (n.directional.length = m, n.spot.length = v, n.rectArea.length = p, n.point.length = g, n.hemi.length = d, n.directionalShadow.length = A, n.directionalShadowMap.length = A, n.pointShadow.length = b, n.pointShadowMap.length = b, n.spotShadow.length = y, n.spotShadowMap.length = y, n.directionalShadowMatrix.length = A, n.pointShadowMatrix.length = b, n.spotLightMatrix.length = y + U - L, n.spotLightMap.length = U, n.numSpotLightShadowsWithMaps = L, n.numLightProbes = w, I.directionalLength = m, I.pointLength = g, I.spotLength = v, I.rectAreaLength = p, I.hemiLength = d, I.numDirectionalShadows = A, I.numPointShadows = b, I.numSpotShadows = y, I.numSpotMaps = U, I.numLightProbes = w, n.version = wp++);
  }
  function l(c, u) {
    let h = 0, f = 0, m = 0, g = 0, v = 0;
    const p = u.matrixWorldInverse;
    for (let d = 0, A = c.length; d < A; d++) {
      const b = c[d];
      if (b.isDirectionalLight) {
        const y = n.directional[h];
        y.direction.setFromMatrixPosition(b.matrixWorld), r.setFromMatrixPosition(b.target.matrixWorld), y.direction.sub(r), y.direction.transformDirection(p), h++;
      } else if (b.isSpotLight) {
        const y = n.spot[m];
        y.position.setFromMatrixPosition(b.matrixWorld), y.position.applyMatrix4(p), y.direction.setFromMatrixPosition(b.matrixWorld), r.setFromMatrixPosition(b.target.matrixWorld), y.direction.sub(r), y.direction.transformDirection(p), m++;
      } else if (b.isRectAreaLight) {
        const y = n.rectArea[g];
        y.position.setFromMatrixPosition(b.matrixWorld), y.position.applyMatrix4(p), a.identity(), s.copy(b.matrixWorld), s.premultiply(p), a.extractRotation(s), y.halfWidth.set(b.width * 0.5, 0, 0), y.halfHeight.set(0, b.height * 0.5, 0), y.halfWidth.applyMatrix4(a), y.halfHeight.applyMatrix4(a), g++;
      } else if (b.isPointLight) {
        const y = n.point[f];
        y.position.setFromMatrixPosition(b.matrixWorld), y.position.applyMatrix4(p), f++;
      } else if (b.isHemisphereLight) {
        const y = n.hemi[v];
        y.direction.setFromMatrixPosition(b.matrixWorld), y.direction.transformDirection(p), v++;
      }
    }
  }
  return { setup: o, setupView: l, state: n };
}
function wo(i3) {
  const e = new Cp(i3), t = [], n = [];
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
function Pp(i3) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, s = 0) {
    const a = e.get(r);
    let o;
    return a === void 0 ? (o = new wo(i3), e.set(r, [o])) : s >= a.length ? (o = new wo(i3), a.push(o)) : o = a[s], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: n };
}
const Lp = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Dp = `uniform sampler2D shadow_pass;
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
function Up(i3, e, t) {
  let n = new hl();
  const r = new Ze(), s = new Ze(), a = new at(), o = new ru({ depthPacking: pc }), l = new su(), c = {}, u = t.maxTextureSize, h = { [Mn]: yt, [yt]: Mn, [sn]: sn }, f = new En({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Ze() }, radius: { value: 4 } }, vertexShader: Lp, fragmentShader: Dp }), m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new dn();
  g.setAttribute("position", new Zt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const v = new Kt(g, f), p = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = zo;
  let d = this.type;
  this.render = function(L, w, I) {
    if (p.enabled === false || p.autoUpdate === false && p.needsUpdate === false || L.length === 0) return;
    const M = i3.getRenderTarget(), S = i3.getActiveCubeFace(), R = i3.getActiveMipmapLevel(), W = i3.state;
    W.setBlending(xn), W.buffers.color.setClear(1, 1, 1, 1), W.buffers.depth.setTest(true), W.setScissorTest(false);
    const H = d !== rn && this.type === rn, Z = d === rn && this.type !== rn;
    for (let j = 0, Y = L.length; j < Y; j++) {
      const Q = L[j], V = Q.shadow;
      if (V === void 0) {
        console.warn("THREE.WebGLShadowMap:", Q, "has no shadow.");
        continue;
      }
      if (V.autoUpdate === false && V.needsUpdate === false) continue;
      r.copy(V.mapSize);
      const ae = V.getFrameExtents();
      if (r.multiply(ae), s.copy(V.mapSize), (r.x > u || r.y > u) && (r.x > u && (s.x = Math.floor(u / ae.x), r.x = s.x * ae.x, V.mapSize.x = s.x), r.y > u && (s.y = Math.floor(u / ae.y), r.y = s.y * ae.y, V.mapSize.y = s.y)), V.map === null || H === true || Z === true) {
        const Se = this.type !== rn ? { minFilter: Vt, magFilter: Vt } : {};
        V.map !== null && V.map.dispose(), V.map = new Vn(r.x, r.y, Se), V.map.texture.name = Q.name + ".shadowMap", V.camera.updateProjectionMatrix();
      }
      i3.setRenderTarget(V.map), i3.clear();
      const he = V.getViewportCount();
      for (let Se = 0; Se < he; Se++) {
        const Ie = V.getViewport(Se);
        a.set(s.x * Ie.x, s.y * Ie.y, s.x * Ie.z, s.y * Ie.w), W.viewport(a), V.updateMatrices(Q, Se), n = V.getFrustum(), y(w, I, V.camera, Q, this.type);
      }
      V.isPointLightShadow !== true && this.type === rn && A(V, I), V.needsUpdate = false;
    }
    d = this.type, p.needsUpdate = false, i3.setRenderTarget(M, S, R);
  };
  function A(L, w) {
    const I = e.update(v);
    f.defines.VSM_SAMPLES !== L.blurSamples && (f.defines.VSM_SAMPLES = L.blurSamples, m.defines.VSM_SAMPLES = L.blurSamples, f.needsUpdate = true, m.needsUpdate = true), L.mapPass === null && (L.mapPass = new Vn(r.x, r.y)), f.uniforms.shadow_pass.value = L.map.texture, f.uniforms.resolution.value = L.mapSize, f.uniforms.radius.value = L.radius, i3.setRenderTarget(L.mapPass), i3.clear(), i3.renderBufferDirect(w, null, I, f, v, null), m.uniforms.shadow_pass.value = L.mapPass.texture, m.uniforms.resolution.value = L.mapSize, m.uniforms.radius.value = L.radius, i3.setRenderTarget(L.map), i3.clear(), i3.renderBufferDirect(w, null, I, m, v, null);
  }
  function b(L, w, I, M) {
    let S = null;
    const R = I.isPointLight === true ? L.customDistanceMaterial : L.customDepthMaterial;
    if (R !== void 0) S = R;
    else if (S = I.isPointLight === true ? l : o, i3.localClippingEnabled && w.clipShadows === true && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) {
      const W = S.uuid, H = w.uuid;
      let Z = c[W];
      Z === void 0 && (Z = {}, c[W] = Z);
      let j = Z[H];
      j === void 0 && (j = S.clone(), Z[H] = j, w.addEventListener("dispose", U)), S = j;
    }
    if (S.visible = w.visible, S.wireframe = w.wireframe, M === rn ? S.side = w.shadowSide !== null ? w.shadowSide : w.side : S.side = w.shadowSide !== null ? w.shadowSide : h[w.side], S.alphaMap = w.alphaMap, S.alphaTest = w.alphaTest, S.map = w.map, S.clipShadows = w.clipShadows, S.clippingPlanes = w.clippingPlanes, S.clipIntersection = w.clipIntersection, S.displacementMap = w.displacementMap, S.displacementScale = w.displacementScale, S.displacementBias = w.displacementBias, S.wireframeLinewidth = w.wireframeLinewidth, S.linewidth = w.linewidth, I.isPointLight === true && S.isMeshDistanceMaterial === true) {
      const W = i3.properties.get(S);
      W.light = I;
    }
    return S;
  }
  function y(L, w, I, M, S) {
    if (L.visible === false) return;
    if (L.layers.test(w.layers) && (L.isMesh || L.isLine || L.isPoints) && (L.castShadow || L.receiveShadow && S === rn) && (!L.frustumCulled || n.intersectsObject(L))) {
      L.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse, L.matrixWorld);
      const H = e.update(L), Z = L.material;
      if (Array.isArray(Z)) {
        const j = H.groups;
        for (let Y = 0, Q = j.length; Y < Q; Y++) {
          const V = j[Y], ae = Z[V.materialIndex];
          if (ae && ae.visible) {
            const he = b(L, ae, M, S);
            L.onBeforeShadow(i3, L, w, I, H, he, V), i3.renderBufferDirect(I, null, H, he, L, V), L.onAfterShadow(i3, L, w, I, H, he, V);
          }
        }
      } else if (Z.visible) {
        const j = b(L, Z, M, S);
        L.onBeforeShadow(i3, L, w, I, H, j, null), i3.renderBufferDirect(I, null, H, j, L, null), L.onAfterShadow(i3, L, w, I, H, j, null);
      }
    }
    const W = L.children;
    for (let H = 0, Z = W.length; H < Z; H++) y(W[H], w, I, M, S);
  }
  function U(L) {
    L.target.removeEventListener("dispose", U);
    for (const I in c) {
      const M = c[I], S = L.target.uuid;
      S in M && (M[S].dispose(), delete M[S]);
    }
  }
}
const Ip = { [vs]: xs, [Ss]: ys, [Ms]: bs, [fi]: Es, [xs]: vs, [ys]: Ss, [bs]: Ms, [Es]: fi };
function Np(i3, e) {
  function t() {
    let C = false;
    const re = new at();
    let k = null;
    const K = new at(0, 0, 0, 0);
    return { setMask: function(ue) {
      k !== ue && !C && (i3.colorMask(ue, ue, ue, ue), k = ue);
    }, setLocked: function(ue) {
      C = ue;
    }, setClear: function(ue, ce, Pe, it, mt) {
      mt === true && (ue *= it, ce *= it, Pe *= it), re.set(ue, ce, Pe, it), K.equals(re) === false && (i3.clearColor(ue, ce, Pe, it), K.copy(re));
    }, reset: function() {
      C = false, k = null, K.set(-1, 0, 0, 0);
    } };
  }
  function n() {
    let C = false, re = false, k = null, K = null, ue = null;
    return { setReversed: function(ce) {
      if (re !== ce) {
        const Pe = e.get("EXT_clip_control");
        re ? Pe.clipControlEXT(Pe.LOWER_LEFT_EXT, Pe.ZERO_TO_ONE_EXT) : Pe.clipControlEXT(Pe.LOWER_LEFT_EXT, Pe.NEGATIVE_ONE_TO_ONE_EXT);
        const it = ue;
        ue = null, this.setClear(it);
      }
      re = ce;
    }, getReversed: function() {
      return re;
    }, setTest: function(ce) {
      ce ? oe(i3.DEPTH_TEST) : Te(i3.DEPTH_TEST);
    }, setMask: function(ce) {
      k !== ce && !C && (i3.depthMask(ce), k = ce);
    }, setFunc: function(ce) {
      if (re && (ce = Ip[ce]), K !== ce) {
        switch (ce) {
          case vs:
            i3.depthFunc(i3.NEVER);
            break;
          case xs:
            i3.depthFunc(i3.ALWAYS);
            break;
          case Ss:
            i3.depthFunc(i3.LESS);
            break;
          case fi:
            i3.depthFunc(i3.LEQUAL);
            break;
          case Ms:
            i3.depthFunc(i3.EQUAL);
            break;
          case Es:
            i3.depthFunc(i3.GEQUAL);
            break;
          case ys:
            i3.depthFunc(i3.GREATER);
            break;
          case bs:
            i3.depthFunc(i3.NOTEQUAL);
            break;
          default:
            i3.depthFunc(i3.LEQUAL);
        }
        K = ce;
      }
    }, setLocked: function(ce) {
      C = ce;
    }, setClear: function(ce) {
      ue !== ce && (re && (ce = 1 - ce), i3.clearDepth(ce), ue = ce);
    }, reset: function() {
      C = false, k = null, K = null, ue = null, re = false;
    } };
  }
  function r() {
    let C = false, re = null, k = null, K = null, ue = null, ce = null, Pe = null, it = null, mt = null;
    return { setTest: function($e) {
      C || ($e ? oe(i3.STENCIL_TEST) : Te(i3.STENCIL_TEST));
    }, setMask: function($e) {
      re !== $e && !C && (i3.stencilMask($e), re = $e);
    }, setFunc: function($e, Nt, jt) {
      (k !== $e || K !== Nt || ue !== jt) && (i3.stencilFunc($e, Nt, jt), k = $e, K = Nt, ue = jt);
    }, setOp: function($e, Nt, jt) {
      (ce !== $e || Pe !== Nt || it !== jt) && (i3.stencilOp($e, Nt, jt), ce = $e, Pe = Nt, it = jt);
    }, setLocked: function($e) {
      C = $e;
    }, setClear: function($e) {
      mt !== $e && (i3.clearStencil($e), mt = $e);
    }, reset: function() {
      C = false, re = null, k = null, K = null, ue = null, ce = null, Pe = null, it = null, mt = null;
    } };
  }
  const s = new t(), a = new n(), o = new r(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let u = {}, h = {}, f = /* @__PURE__ */ new WeakMap(), m = [], g = null, v = false, p = null, d = null, A = null, b = null, y = null, U = null, L = null, w = new Xe(0, 0, 0), I = 0, M = false, S = null, R = null, W = null, H = null, Z = null;
  const j = i3.getParameter(i3.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let Y = false, Q = 0;
  const V = i3.getParameter(i3.VERSION);
  V.indexOf("WebGL") !== -1 ? (Q = parseFloat(/^WebGL (\d)/.exec(V)[1]), Y = Q >= 1) : V.indexOf("OpenGL ES") !== -1 && (Q = parseFloat(/^OpenGL ES (\d)/.exec(V)[1]), Y = Q >= 2);
  let ae = null, he = {};
  const Se = i3.getParameter(i3.SCISSOR_BOX), Ie = i3.getParameter(i3.VIEWPORT), je = new at().fromArray(Se), X = new at().fromArray(Ie);
  function ne(C, re, k, K) {
    const ue = new Uint8Array(4), ce = i3.createTexture();
    i3.bindTexture(C, ce), i3.texParameteri(C, i3.TEXTURE_MIN_FILTER, i3.NEAREST), i3.texParameteri(C, i3.TEXTURE_MAG_FILTER, i3.NEAREST);
    for (let Pe = 0; Pe < k; Pe++) C === i3.TEXTURE_3D || C === i3.TEXTURE_2D_ARRAY ? i3.texImage3D(re, 0, i3.RGBA, 1, 1, K, 0, i3.RGBA, i3.UNSIGNED_BYTE, ue) : i3.texImage2D(re + Pe, 0, i3.RGBA, 1, 1, 0, i3.RGBA, i3.UNSIGNED_BYTE, ue);
    return ce;
  }
  const ge = {};
  ge[i3.TEXTURE_2D] = ne(i3.TEXTURE_2D, i3.TEXTURE_2D, 1), ge[i3.TEXTURE_CUBE_MAP] = ne(i3.TEXTURE_CUBE_MAP, i3.TEXTURE_CUBE_MAP_POSITIVE_X, 6), ge[i3.TEXTURE_2D_ARRAY] = ne(i3.TEXTURE_2D_ARRAY, i3.TEXTURE_2D_ARRAY, 1, 1), ge[i3.TEXTURE_3D] = ne(i3.TEXTURE_3D, i3.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), oe(i3.DEPTH_TEST), a.setFunc(fi), Oe(false), Be(Ra), oe(i3.CULL_FACE), T(xn);
  function oe(C) {
    u[C] !== true && (i3.enable(C), u[C] = true);
  }
  function Te(C) {
    u[C] !== false && (i3.disable(C), u[C] = false);
  }
  function We(C, re) {
    return h[C] !== re ? (i3.bindFramebuffer(C, re), h[C] = re, C === i3.DRAW_FRAMEBUFFER && (h[i3.FRAMEBUFFER] = re), C === i3.FRAMEBUFFER && (h[i3.DRAW_FRAMEBUFFER] = re), true) : false;
  }
  function Ae(C, re) {
    let k = m, K = false;
    if (C) {
      k = f.get(re), k === void 0 && (k = [], f.set(re, k));
      const ue = C.textures;
      if (k.length !== ue.length || k[0] !== i3.COLOR_ATTACHMENT0) {
        for (let ce = 0, Pe = ue.length; ce < Pe; ce++) k[ce] = i3.COLOR_ATTACHMENT0 + ce;
        k.length = ue.length, K = true;
      }
    } else k[0] !== i3.BACK && (k[0] = i3.BACK, K = true);
    K && i3.drawBuffers(k);
  }
  function st(C) {
    return g !== C ? (i3.useProgram(C), g = C, true) : false;
  }
  const nt = { [On]: i3.FUNC_ADD, [Hl]: i3.FUNC_SUBTRACT, [kl]: i3.FUNC_REVERSE_SUBTRACT };
  nt[Vl] = i3.MIN, nt[Gl] = i3.MAX;
  const Fe = { [Wl]: i3.ZERO, [Xl]: i3.ONE, [ql]: i3.SRC_COLOR, [_s]: i3.SRC_ALPHA, [Jl]: i3.SRC_ALPHA_SATURATE, [Zl]: i3.DST_COLOR, [$l]: i3.DST_ALPHA, [Yl]: i3.ONE_MINUS_SRC_COLOR, [gs]: i3.ONE_MINUS_SRC_ALPHA, [jl]: i3.ONE_MINUS_DST_COLOR, [Kl]: i3.ONE_MINUS_DST_ALPHA, [Ql]: i3.CONSTANT_COLOR, [ec]: i3.ONE_MINUS_CONSTANT_COLOR, [tc]: i3.CONSTANT_ALPHA, [nc]: i3.ONE_MINUS_CONSTANT_ALPHA };
  function T(C, re, k, K, ue, ce, Pe, it, mt, $e) {
    if (C === xn) {
      v === true && (Te(i3.BLEND), v = false);
      return;
    }
    if (v === false && (oe(i3.BLEND), v = true), C !== zl) {
      if (C !== p || $e !== M) {
        if ((d !== On || y !== On) && (i3.blendEquation(i3.FUNC_ADD), d = On, y = On), $e) switch (C) {
          case ui:
            i3.blendFuncSeparate(i3.ONE, i3.ONE_MINUS_SRC_ALPHA, i3.ONE, i3.ONE_MINUS_SRC_ALPHA);
            break;
          case Ca:
            i3.blendFunc(i3.ONE, i3.ONE);
            break;
          case Pa:
            i3.blendFuncSeparate(i3.ZERO, i3.ONE_MINUS_SRC_COLOR, i3.ZERO, i3.ONE);
            break;
          case La:
            i3.blendFuncSeparate(i3.ZERO, i3.SRC_COLOR, i3.ZERO, i3.SRC_ALPHA);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", C);
            break;
        }
        else switch (C) {
          case ui:
            i3.blendFuncSeparate(i3.SRC_ALPHA, i3.ONE_MINUS_SRC_ALPHA, i3.ONE, i3.ONE_MINUS_SRC_ALPHA);
            break;
          case Ca:
            i3.blendFunc(i3.SRC_ALPHA, i3.ONE);
            break;
          case Pa:
            i3.blendFuncSeparate(i3.ZERO, i3.ONE_MINUS_SRC_COLOR, i3.ZERO, i3.ONE);
            break;
          case La:
            i3.blendFunc(i3.ZERO, i3.SRC_COLOR);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", C);
            break;
        }
        A = null, b = null, U = null, L = null, w.set(0, 0, 0), I = 0, p = C, M = $e;
      }
      return;
    }
    ue = ue || re, ce = ce || k, Pe = Pe || K, (re !== d || ue !== y) && (i3.blendEquationSeparate(nt[re], nt[ue]), d = re, y = ue), (k !== A || K !== b || ce !== U || Pe !== L) && (i3.blendFuncSeparate(Fe[k], Fe[K], Fe[ce], Fe[Pe]), A = k, b = K, U = ce, L = Pe), (it.equals(w) === false || mt !== I) && (i3.blendColor(it.r, it.g, it.b, mt), w.copy(it), I = mt), p = C, M = false;
  }
  function Ct(C, re) {
    C.side === sn ? Te(i3.CULL_FACE) : oe(i3.CULL_FACE);
    let k = C.side === yt;
    re && (k = !k), Oe(k), C.blending === ui && C.transparent === false ? T(xn) : T(C.blending, C.blendEquation, C.blendSrc, C.blendDst, C.blendEquationAlpha, C.blendSrcAlpha, C.blendDstAlpha, C.blendColor, C.blendAlpha, C.premultipliedAlpha), a.setFunc(C.depthFunc), a.setTest(C.depthTest), a.setMask(C.depthWrite), s.setMask(C.colorWrite);
    const K = C.stencilWrite;
    o.setTest(K), K && (o.setMask(C.stencilWriteMask), o.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask), o.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)), et(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits), C.alphaToCoverage === true ? oe(i3.SAMPLE_ALPHA_TO_COVERAGE) : Te(i3.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Oe(C) {
    S !== C && (C ? i3.frontFace(i3.CW) : i3.frontFace(i3.CCW), S = C);
  }
  function Be(C) {
    C !== Fl ? (oe(i3.CULL_FACE), C !== R && (C === Ra ? i3.cullFace(i3.BACK) : C === Ol ? i3.cullFace(i3.FRONT) : i3.cullFace(i3.FRONT_AND_BACK))) : Te(i3.CULL_FACE), R = C;
  }
  function Me(C) {
    C !== W && (Y && i3.lineWidth(C), W = C);
  }
  function et(C, re, k) {
    C ? (oe(i3.POLYGON_OFFSET_FILL), (H !== re || Z !== k) && (i3.polygonOffset(re, k), H = re, Z = k)) : Te(i3.POLYGON_OFFSET_FILL);
  }
  function xe(C) {
    C ? oe(i3.SCISSOR_TEST) : Te(i3.SCISSOR_TEST);
  }
  function E(C) {
    C === void 0 && (C = i3.TEXTURE0 + j - 1), ae !== C && (i3.activeTexture(C), ae = C);
  }
  function _(C, re, k) {
    k === void 0 && (ae === null ? k = i3.TEXTURE0 + j - 1 : k = ae);
    let K = he[k];
    K === void 0 && (K = { type: void 0, texture: void 0 }, he[k] = K), (K.type !== C || K.texture !== re) && (ae !== k && (i3.activeTexture(k), ae = k), i3.bindTexture(C, re || ge[C]), K.type = C, K.texture = re);
  }
  function N() {
    const C = he[ae];
    C !== void 0 && C.type !== void 0 && (i3.bindTexture(C.type, null), C.type = void 0, C.texture = void 0);
  }
  function $() {
    try {
      i3.compressedTexImage2D.apply(i3, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function J() {
    try {
      i3.compressedTexImage3D.apply(i3, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function G() {
    try {
      i3.texSubImage2D.apply(i3, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ve() {
    try {
      i3.texSubImage3D.apply(i3, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function le() {
    try {
      i3.compressedTexSubImage2D.apply(i3, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function fe() {
    try {
      i3.compressedTexSubImage3D.apply(i3, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function He() {
    try {
      i3.texStorage2D.apply(i3, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function te() {
    try {
      i3.texStorage3D.apply(i3, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function pe() {
    try {
      i3.texImage2D.apply(i3, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function be() {
    try {
      i3.texImage3D.apply(i3, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function we(C) {
    je.equals(C) === false && (i3.scissor(C.x, C.y, C.z, C.w), je.copy(C));
  }
  function me(C) {
    X.equals(C) === false && (i3.viewport(C.x, C.y, C.z, C.w), X.copy(C));
  }
  function ze(C, re) {
    let k = c.get(re);
    k === void 0 && (k = /* @__PURE__ */ new WeakMap(), c.set(re, k));
    let K = k.get(C);
    K === void 0 && (K = i3.getUniformBlockIndex(re, C.name), k.set(C, K));
  }
  function De(C, re) {
    const K = c.get(re).get(C);
    l.get(re) !== K && (i3.uniformBlockBinding(re, K, C.__bindingPointIndex), l.set(re, K));
  }
  function Je() {
    i3.disable(i3.BLEND), i3.disable(i3.CULL_FACE), i3.disable(i3.DEPTH_TEST), i3.disable(i3.POLYGON_OFFSET_FILL), i3.disable(i3.SCISSOR_TEST), i3.disable(i3.STENCIL_TEST), i3.disable(i3.SAMPLE_ALPHA_TO_COVERAGE), i3.blendEquation(i3.FUNC_ADD), i3.blendFunc(i3.ONE, i3.ZERO), i3.blendFuncSeparate(i3.ONE, i3.ZERO, i3.ONE, i3.ZERO), i3.blendColor(0, 0, 0, 0), i3.colorMask(true, true, true, true), i3.clearColor(0, 0, 0, 0), i3.depthMask(true), i3.depthFunc(i3.LESS), a.setReversed(false), i3.clearDepth(1), i3.stencilMask(4294967295), i3.stencilFunc(i3.ALWAYS, 0, 4294967295), i3.stencilOp(i3.KEEP, i3.KEEP, i3.KEEP), i3.clearStencil(0), i3.cullFace(i3.BACK), i3.frontFace(i3.CCW), i3.polygonOffset(0, 0), i3.activeTexture(i3.TEXTURE0), i3.bindFramebuffer(i3.FRAMEBUFFER, null), i3.bindFramebuffer(i3.DRAW_FRAMEBUFFER, null), i3.bindFramebuffer(i3.READ_FRAMEBUFFER, null), i3.useProgram(null), i3.lineWidth(1), i3.scissor(0, 0, i3.canvas.width, i3.canvas.height), i3.viewport(0, 0, i3.canvas.width, i3.canvas.height), u = {}, ae = null, he = {}, h = {}, f = /* @__PURE__ */ new WeakMap(), m = [], g = null, v = false, p = null, d = null, A = null, b = null, y = null, U = null, L = null, w = new Xe(0, 0, 0), I = 0, M = false, S = null, R = null, W = null, H = null, Z = null, je.set(0, 0, i3.canvas.width, i3.canvas.height), X.set(0, 0, i3.canvas.width, i3.canvas.height), s.reset(), a.reset(), o.reset();
  }
  return { buffers: { color: s, depth: a, stencil: o }, enable: oe, disable: Te, bindFramebuffer: We, drawBuffers: Ae, useProgram: st, setBlending: T, setMaterial: Ct, setFlipSided: Oe, setCullFace: Be, setLineWidth: Me, setPolygonOffset: et, setScissorTest: xe, activeTexture: E, bindTexture: _, unbindTexture: N, compressedTexImage2D: $, compressedTexImage3D: J, texImage2D: pe, texImage3D: be, updateUBOMapping: ze, uniformBlockBinding: De, texStorage2D: He, texStorage3D: te, texSubImage2D: G, texSubImage3D: ve, compressedTexSubImage2D: le, compressedTexSubImage3D: fe, scissor: we, viewport: me, reset: Je };
}
function Fp(i3, e, t, n, r, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), c = new Ze(), u = /* @__PURE__ */ new WeakMap();
  let h;
  const f = /* @__PURE__ */ new WeakMap();
  let m = false;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(E, _) {
    return m ? new OffscreenCanvas(E, _) : Ar("canvas");
  }
  function v(E, _, N) {
    let $ = 1;
    const J = xe(E);
    if ((J.width > N || J.height > N) && ($ = N / Math.max(J.width, J.height)), $ < 1) if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap || typeof VideoFrame < "u" && E instanceof VideoFrame) {
      const G = Math.floor($ * J.width), ve = Math.floor($ * J.height);
      h === void 0 && (h = g(G, ve));
      const le = _ ? g(G, ve) : h;
      return le.width = G, le.height = ve, le.getContext("2d").drawImage(E, 0, 0, G, ve), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + J.width + "x" + J.height + ") to (" + G + "x" + ve + ")."), le;
    } else return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + J.width + "x" + J.height + ")."), E;
    return E;
  }
  function p(E) {
    return E.generateMipmaps;
  }
  function d(E) {
    i3.generateMipmap(E);
  }
  function A(E) {
    return E.isWebGLCubeRenderTarget ? i3.TEXTURE_CUBE_MAP : E.isWebGL3DRenderTarget ? i3.TEXTURE_3D : E.isWebGLArrayRenderTarget || E.isCompressedArrayTexture ? i3.TEXTURE_2D_ARRAY : i3.TEXTURE_2D;
  }
  function b(E, _, N, $, J = false) {
    if (E !== null) {
      if (i3[E] !== void 0) return i3[E];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let G = _;
    if (_ === i3.RED && (N === i3.FLOAT && (G = i3.R32F), N === i3.HALF_FLOAT && (G = i3.R16F), N === i3.UNSIGNED_BYTE && (G = i3.R8)), _ === i3.RED_INTEGER && (N === i3.UNSIGNED_BYTE && (G = i3.R8UI), N === i3.UNSIGNED_SHORT && (G = i3.R16UI), N === i3.UNSIGNED_INT && (G = i3.R32UI), N === i3.BYTE && (G = i3.R8I), N === i3.SHORT && (G = i3.R16I), N === i3.INT && (G = i3.R32I)), _ === i3.RG && (N === i3.FLOAT && (G = i3.RG32F), N === i3.HALF_FLOAT && (G = i3.RG16F), N === i3.UNSIGNED_BYTE && (G = i3.RG8)), _ === i3.RG_INTEGER && (N === i3.UNSIGNED_BYTE && (G = i3.RG8UI), N === i3.UNSIGNED_SHORT && (G = i3.RG16UI), N === i3.UNSIGNED_INT && (G = i3.RG32UI), N === i3.BYTE && (G = i3.RG8I), N === i3.SHORT && (G = i3.RG16I), N === i3.INT && (G = i3.RG32I)), _ === i3.RGB_INTEGER && (N === i3.UNSIGNED_BYTE && (G = i3.RGB8UI), N === i3.UNSIGNED_SHORT && (G = i3.RGB16UI), N === i3.UNSIGNED_INT && (G = i3.RGB32UI), N === i3.BYTE && (G = i3.RGB8I), N === i3.SHORT && (G = i3.RGB16I), N === i3.INT && (G = i3.RGB32I)), _ === i3.RGBA_INTEGER && (N === i3.UNSIGNED_BYTE && (G = i3.RGBA8UI), N === i3.UNSIGNED_SHORT && (G = i3.RGBA16UI), N === i3.UNSIGNED_INT && (G = i3.RGBA32UI), N === i3.BYTE && (G = i3.RGBA8I), N === i3.SHORT && (G = i3.RGBA16I), N === i3.INT && (G = i3.RGBA32I)), _ === i3.RGB && N === i3.UNSIGNED_INT_5_9_9_9_REV && (G = i3.RGB9_E5), _ === i3.RGBA) {
      const ve = J ? br : Ge.getTransfer($);
      N === i3.FLOAT && (G = i3.RGBA32F), N === i3.HALF_FLOAT && (G = i3.RGBA16F), N === i3.UNSIGNED_BYTE && (G = ve === Ke ? i3.SRGB8_ALPHA8 : i3.RGBA8), N === i3.UNSIGNED_SHORT_4_4_4_4 && (G = i3.RGBA4), N === i3.UNSIGNED_SHORT_5_5_5_1 && (G = i3.RGB5_A1);
    }
    return (G === i3.R16F || G === i3.R32F || G === i3.RG16F || G === i3.RG32F || G === i3.RGBA16F || G === i3.RGBA32F) && e.get("EXT_color_buffer_float"), G;
  }
  function y(E, _) {
    let N;
    return E ? _ === null || _ === kn || _ === _i ? N = i3.DEPTH24_STENCIL8 : _ === an ? N = i3.DEPTH32F_STENCIL8 : _ === Bi && (N = i3.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === kn || _ === _i ? N = i3.DEPTH_COMPONENT24 : _ === an ? N = i3.DEPTH_COMPONENT32F : _ === Bi && (N = i3.DEPTH_COMPONENT16), N;
  }
  function U(E, _) {
    return p(E) === true || E.isFramebufferTexture && E.minFilter !== Vt && E.minFilter !== $t ? Math.log2(Math.max(_.width, _.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? _.mipmaps.length : 1;
  }
  function L(E) {
    const _ = E.target;
    _.removeEventListener("dispose", L), I(_), _.isVideoTexture && u.delete(_);
  }
  function w(E) {
    const _ = E.target;
    _.removeEventListener("dispose", w), S(_);
  }
  function I(E) {
    const _ = n.get(E);
    if (_.__webglInit === void 0) return;
    const N = E.source, $ = f.get(N);
    if ($) {
      const J = $[_.__cacheKey];
      J.usedTimes--, J.usedTimes === 0 && M(E), Object.keys($).length === 0 && f.delete(N);
    }
    n.remove(E);
  }
  function M(E) {
    const _ = n.get(E);
    i3.deleteTexture(_.__webglTexture);
    const N = E.source, $ = f.get(N);
    delete $[_.__cacheKey], a.memory.textures--;
  }
  function S(E) {
    const _ = n.get(E);
    if (E.depthTexture && (E.depthTexture.dispose(), n.remove(E.depthTexture)), E.isWebGLCubeRenderTarget) for (let $ = 0; $ < 6; $++) {
      if (Array.isArray(_.__webglFramebuffer[$])) for (let J = 0; J < _.__webglFramebuffer[$].length; J++) i3.deleteFramebuffer(_.__webglFramebuffer[$][J]);
      else i3.deleteFramebuffer(_.__webglFramebuffer[$]);
      _.__webglDepthbuffer && i3.deleteRenderbuffer(_.__webglDepthbuffer[$]);
    }
    else {
      if (Array.isArray(_.__webglFramebuffer)) for (let $ = 0; $ < _.__webglFramebuffer.length; $++) i3.deleteFramebuffer(_.__webglFramebuffer[$]);
      else i3.deleteFramebuffer(_.__webglFramebuffer);
      if (_.__webglDepthbuffer && i3.deleteRenderbuffer(_.__webglDepthbuffer), _.__webglMultisampledFramebuffer && i3.deleteFramebuffer(_.__webglMultisampledFramebuffer), _.__webglColorRenderbuffer) for (let $ = 0; $ < _.__webglColorRenderbuffer.length; $++) _.__webglColorRenderbuffer[$] && i3.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);
      _.__webglDepthRenderbuffer && i3.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const N = E.textures;
    for (let $ = 0, J = N.length; $ < J; $++) {
      const G = n.get(N[$]);
      G.__webglTexture && (i3.deleteTexture(G.__webglTexture), a.memory.textures--), n.remove(N[$]);
    }
    n.remove(E);
  }
  let R = 0;
  function W() {
    R = 0;
  }
  function H() {
    const E = R;
    return E >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + r.maxTextures), R += 1, E;
  }
  function Z(E) {
    const _ = [];
    return _.push(E.wrapS), _.push(E.wrapT), _.push(E.wrapR || 0), _.push(E.magFilter), _.push(E.minFilter), _.push(E.anisotropy), _.push(E.internalFormat), _.push(E.format), _.push(E.type), _.push(E.generateMipmaps), _.push(E.premultiplyAlpha), _.push(E.flipY), _.push(E.unpackAlignment), _.push(E.colorSpace), _.join();
  }
  function j(E, _) {
    const N = n.get(E);
    if (E.isVideoTexture && Me(E), E.isRenderTargetTexture === false && E.version > 0 && N.__version !== E.version) {
      const $ = E.image;
      if ($ === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if ($.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        X(N, E, _);
        return;
      }
    }
    t.bindTexture(i3.TEXTURE_2D, N.__webglTexture, i3.TEXTURE0 + _);
  }
  function Y(E, _) {
    const N = n.get(E);
    if (E.version > 0 && N.__version !== E.version) {
      X(N, E, _);
      return;
    }
    t.bindTexture(i3.TEXTURE_2D_ARRAY, N.__webglTexture, i3.TEXTURE0 + _);
  }
  function Q(E, _) {
    const N = n.get(E);
    if (E.version > 0 && N.__version !== E.version) {
      X(N, E, _);
      return;
    }
    t.bindTexture(i3.TEXTURE_3D, N.__webglTexture, i3.TEXTURE0 + _);
  }
  function V(E, _) {
    const N = n.get(E);
    if (E.version > 0 && N.__version !== E.version) {
      ne(N, E, _);
      return;
    }
    t.bindTexture(i3.TEXTURE_CUBE_MAP, N.__webglTexture, i3.TEXTURE0 + _);
  }
  const ae = { [ws]: i3.REPEAT, [zn]: i3.CLAMP_TO_EDGE, [Rs]: i3.MIRRORED_REPEAT }, he = { [Vt]: i3.NEAREST, [hc]: i3.NEAREST_MIPMAP_NEAREST, [qi]: i3.NEAREST_MIPMAP_LINEAR, [$t]: i3.LINEAR, [Br]: i3.LINEAR_MIPMAP_NEAREST, [Hn]: i3.LINEAR_MIPMAP_LINEAR }, Se = { [_c]: i3.NEVER, [Ec]: i3.ALWAYS, [gc]: i3.LESS, [Qo]: i3.LEQUAL, [vc]: i3.EQUAL, [Mc]: i3.GEQUAL, [xc]: i3.GREATER, [Sc]: i3.NOTEQUAL };
  function Ie(E, _) {
    if (_.type === an && e.has("OES_texture_float_linear") === false && (_.magFilter === $t || _.magFilter === Br || _.magFilter === qi || _.magFilter === Hn || _.minFilter === $t || _.minFilter === Br || _.minFilter === qi || _.minFilter === Hn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i3.texParameteri(E, i3.TEXTURE_WRAP_S, ae[_.wrapS]), i3.texParameteri(E, i3.TEXTURE_WRAP_T, ae[_.wrapT]), (E === i3.TEXTURE_3D || E === i3.TEXTURE_2D_ARRAY) && i3.texParameteri(E, i3.TEXTURE_WRAP_R, ae[_.wrapR]), i3.texParameteri(E, i3.TEXTURE_MAG_FILTER, he[_.magFilter]), i3.texParameteri(E, i3.TEXTURE_MIN_FILTER, he[_.minFilter]), _.compareFunction && (i3.texParameteri(E, i3.TEXTURE_COMPARE_MODE, i3.COMPARE_REF_TO_TEXTURE), i3.texParameteri(E, i3.TEXTURE_COMPARE_FUNC, Se[_.compareFunction])), e.has("EXT_texture_filter_anisotropic") === true) {
      if (_.magFilter === Vt || _.minFilter !== qi && _.minFilter !== Hn || _.type === an && e.has("OES_texture_float_linear") === false) return;
      if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
        const N = e.get("EXT_texture_filter_anisotropic");
        i3.texParameterf(E, N.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, r.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy;
      }
    }
  }
  function je(E, _) {
    let N = false;
    E.__webglInit === void 0 && (E.__webglInit = true, _.addEventListener("dispose", L));
    const $ = _.source;
    let J = f.get($);
    J === void 0 && (J = {}, f.set($, J));
    const G = Z(_);
    if (G !== E.__cacheKey) {
      J[G] === void 0 && (J[G] = { texture: i3.createTexture(), usedTimes: 0 }, a.memory.textures++, N = true), J[G].usedTimes++;
      const ve = J[E.__cacheKey];
      ve !== void 0 && (J[E.__cacheKey].usedTimes--, ve.usedTimes === 0 && M(_)), E.__cacheKey = G, E.__webglTexture = J[G].texture;
    }
    return N;
  }
  function X(E, _, N) {
    let $ = i3.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && ($ = i3.TEXTURE_2D_ARRAY), _.isData3DTexture && ($ = i3.TEXTURE_3D);
    const J = je(E, _), G = _.source;
    t.bindTexture($, E.__webglTexture, i3.TEXTURE0 + N);
    const ve = n.get(G);
    if (G.version !== ve.__version || J === true) {
      t.activeTexture(i3.TEXTURE0 + N);
      const le = Ge.getPrimaries(Ge.workingColorSpace), fe = _.colorSpace === vn ? null : Ge.getPrimaries(_.colorSpace), He = _.colorSpace === vn || le === fe ? i3.NONE : i3.BROWSER_DEFAULT_WEBGL;
      i3.pixelStorei(i3.UNPACK_FLIP_Y_WEBGL, _.flipY), i3.pixelStorei(i3.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i3.pixelStorei(i3.UNPACK_ALIGNMENT, _.unpackAlignment), i3.pixelStorei(i3.UNPACK_COLORSPACE_CONVERSION_WEBGL, He);
      let te = v(_.image, false, r.maxTextureSize);
      te = et(_, te);
      const pe = s.convert(_.format, _.colorSpace), be = s.convert(_.type);
      let we = b(_.internalFormat, pe, be, _.colorSpace, _.isVideoTexture);
      Ie($, _);
      let me;
      const ze = _.mipmaps, De = _.isVideoTexture !== true, Je = ve.__version === void 0 || J === true, C = G.dataReady, re = U(_, te);
      if (_.isDepthTexture) we = y(_.format === gi, _.type), Je && (De ? t.texStorage2D(i3.TEXTURE_2D, 1, we, te.width, te.height) : t.texImage2D(i3.TEXTURE_2D, 0, we, te.width, te.height, 0, pe, be, null));
      else if (_.isDataTexture) if (ze.length > 0) {
        De && Je && t.texStorage2D(i3.TEXTURE_2D, re, we, ze[0].width, ze[0].height);
        for (let k = 0, K = ze.length; k < K; k++) me = ze[k], De ? C && t.texSubImage2D(i3.TEXTURE_2D, k, 0, 0, me.width, me.height, pe, be, me.data) : t.texImage2D(i3.TEXTURE_2D, k, we, me.width, me.height, 0, pe, be, me.data);
        _.generateMipmaps = false;
      } else De ? (Je && t.texStorage2D(i3.TEXTURE_2D, re, we, te.width, te.height), C && t.texSubImage2D(i3.TEXTURE_2D, 0, 0, 0, te.width, te.height, pe, be, te.data)) : t.texImage2D(i3.TEXTURE_2D, 0, we, te.width, te.height, 0, pe, be, te.data);
      else if (_.isCompressedTexture) if (_.isCompressedArrayTexture) {
        De && Je && t.texStorage3D(i3.TEXTURE_2D_ARRAY, re, we, ze[0].width, ze[0].height, te.depth);
        for (let k = 0, K = ze.length; k < K; k++) if (me = ze[k], _.format !== kt) if (pe !== null) if (De) {
          if (C) if (_.layerUpdates.size > 0) {
            const ue = no(me.width, me.height, _.format, _.type);
            for (const ce of _.layerUpdates) {
              const Pe = me.data.subarray(ce * ue / me.data.BYTES_PER_ELEMENT, (ce + 1) * ue / me.data.BYTES_PER_ELEMENT);
              t.compressedTexSubImage3D(i3.TEXTURE_2D_ARRAY, k, 0, 0, ce, me.width, me.height, 1, pe, Pe);
            }
            _.clearLayerUpdates();
          } else t.compressedTexSubImage3D(i3.TEXTURE_2D_ARRAY, k, 0, 0, 0, me.width, me.height, te.depth, pe, me.data);
        } else t.compressedTexImage3D(i3.TEXTURE_2D_ARRAY, k, we, me.width, me.height, te.depth, 0, me.data, 0, 0);
        else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else De ? C && t.texSubImage3D(i3.TEXTURE_2D_ARRAY, k, 0, 0, 0, me.width, me.height, te.depth, pe, be, me.data) : t.texImage3D(i3.TEXTURE_2D_ARRAY, k, we, me.width, me.height, te.depth, 0, pe, be, me.data);
      } else {
        De && Je && t.texStorage2D(i3.TEXTURE_2D, re, we, ze[0].width, ze[0].height);
        for (let k = 0, K = ze.length; k < K; k++) me = ze[k], _.format !== kt ? pe !== null ? De ? C && t.compressedTexSubImage2D(i3.TEXTURE_2D, k, 0, 0, me.width, me.height, pe, me.data) : t.compressedTexImage2D(i3.TEXTURE_2D, k, we, me.width, me.height, 0, me.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : De ? C && t.texSubImage2D(i3.TEXTURE_2D, k, 0, 0, me.width, me.height, pe, be, me.data) : t.texImage2D(i3.TEXTURE_2D, k, we, me.width, me.height, 0, pe, be, me.data);
      }
      else if (_.isDataArrayTexture) if (De) {
        if (Je && t.texStorage3D(i3.TEXTURE_2D_ARRAY, re, we, te.width, te.height, te.depth), C) if (_.layerUpdates.size > 0) {
          const k = no(te.width, te.height, _.format, _.type);
          for (const K of _.layerUpdates) {
            const ue = te.data.subarray(K * k / te.data.BYTES_PER_ELEMENT, (K + 1) * k / te.data.BYTES_PER_ELEMENT);
            t.texSubImage3D(i3.TEXTURE_2D_ARRAY, 0, 0, 0, K, te.width, te.height, 1, pe, be, ue);
          }
          _.clearLayerUpdates();
        } else t.texSubImage3D(i3.TEXTURE_2D_ARRAY, 0, 0, 0, 0, te.width, te.height, te.depth, pe, be, te.data);
      } else t.texImage3D(i3.TEXTURE_2D_ARRAY, 0, we, te.width, te.height, te.depth, 0, pe, be, te.data);
      else if (_.isData3DTexture) De ? (Je && t.texStorage3D(i3.TEXTURE_3D, re, we, te.width, te.height, te.depth), C && t.texSubImage3D(i3.TEXTURE_3D, 0, 0, 0, 0, te.width, te.height, te.depth, pe, be, te.data)) : t.texImage3D(i3.TEXTURE_3D, 0, we, te.width, te.height, te.depth, 0, pe, be, te.data);
      else if (_.isFramebufferTexture) {
        if (Je) if (De) t.texStorage2D(i3.TEXTURE_2D, re, we, te.width, te.height);
        else {
          let k = te.width, K = te.height;
          for (let ue = 0; ue < re; ue++) t.texImage2D(i3.TEXTURE_2D, ue, we, k, K, 0, pe, be, null), k >>= 1, K >>= 1;
        }
      } else if (ze.length > 0) {
        if (De && Je) {
          const k = xe(ze[0]);
          t.texStorage2D(i3.TEXTURE_2D, re, we, k.width, k.height);
        }
        for (let k = 0, K = ze.length; k < K; k++) me = ze[k], De ? C && t.texSubImage2D(i3.TEXTURE_2D, k, 0, 0, pe, be, me) : t.texImage2D(i3.TEXTURE_2D, k, we, pe, be, me);
        _.generateMipmaps = false;
      } else if (De) {
        if (Je) {
          const k = xe(te);
          t.texStorage2D(i3.TEXTURE_2D, re, we, k.width, k.height);
        }
        C && t.texSubImage2D(i3.TEXTURE_2D, 0, 0, 0, pe, be, te);
      } else t.texImage2D(i3.TEXTURE_2D, 0, we, pe, be, te);
      p(_) && d($), ve.__version = G.version, _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function ne(E, _, N) {
    if (_.image.length !== 6) return;
    const $ = je(E, _), J = _.source;
    t.bindTexture(i3.TEXTURE_CUBE_MAP, E.__webglTexture, i3.TEXTURE0 + N);
    const G = n.get(J);
    if (J.version !== G.__version || $ === true) {
      t.activeTexture(i3.TEXTURE0 + N);
      const ve = Ge.getPrimaries(Ge.workingColorSpace), le = _.colorSpace === vn ? null : Ge.getPrimaries(_.colorSpace), fe = _.colorSpace === vn || ve === le ? i3.NONE : i3.BROWSER_DEFAULT_WEBGL;
      i3.pixelStorei(i3.UNPACK_FLIP_Y_WEBGL, _.flipY), i3.pixelStorei(i3.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i3.pixelStorei(i3.UNPACK_ALIGNMENT, _.unpackAlignment), i3.pixelStorei(i3.UNPACK_COLORSPACE_CONVERSION_WEBGL, fe);
      const He = _.isCompressedTexture || _.image[0].isCompressedTexture, te = _.image[0] && _.image[0].isDataTexture, pe = [];
      for (let K = 0; K < 6; K++) !He && !te ? pe[K] = v(_.image[K], true, r.maxCubemapSize) : pe[K] = te ? _.image[K].image : _.image[K], pe[K] = et(_, pe[K]);
      const be = pe[0], we = s.convert(_.format, _.colorSpace), me = s.convert(_.type), ze = b(_.internalFormat, we, me, _.colorSpace), De = _.isVideoTexture !== true, Je = G.__version === void 0 || $ === true, C = J.dataReady;
      let re = U(_, be);
      Ie(i3.TEXTURE_CUBE_MAP, _);
      let k;
      if (He) {
        De && Je && t.texStorage2D(i3.TEXTURE_CUBE_MAP, re, ze, be.width, be.height);
        for (let K = 0; K < 6; K++) {
          k = pe[K].mipmaps;
          for (let ue = 0; ue < k.length; ue++) {
            const ce = k[ue];
            _.format !== kt ? we !== null ? De ? C && t.compressedTexSubImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + K, ue, 0, 0, ce.width, ce.height, we, ce.data) : t.compressedTexImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + K, ue, ze, ce.width, ce.height, 0, ce.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : De ? C && t.texSubImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + K, ue, 0, 0, ce.width, ce.height, we, me, ce.data) : t.texImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + K, ue, ze, ce.width, ce.height, 0, we, me, ce.data);
          }
        }
      } else {
        if (k = _.mipmaps, De && Je) {
          k.length > 0 && re++;
          const K = xe(pe[0]);
          t.texStorage2D(i3.TEXTURE_CUBE_MAP, re, ze, K.width, K.height);
        }
        for (let K = 0; K < 6; K++) if (te) {
          De ? C && t.texSubImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, pe[K].width, pe[K].height, we, me, pe[K].data) : t.texImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, ze, pe[K].width, pe[K].height, 0, we, me, pe[K].data);
          for (let ue = 0; ue < k.length; ue++) {
            const Pe = k[ue].image[K].image;
            De ? C && t.texSubImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + K, ue + 1, 0, 0, Pe.width, Pe.height, we, me, Pe.data) : t.texImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + K, ue + 1, ze, Pe.width, Pe.height, 0, we, me, Pe.data);
          }
        } else {
          De ? C && t.texSubImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, we, me, pe[K]) : t.texImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, ze, we, me, pe[K]);
          for (let ue = 0; ue < k.length; ue++) {
            const ce = k[ue];
            De ? C && t.texSubImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + K, ue + 1, 0, 0, we, me, ce.image[K]) : t.texImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + K, ue + 1, ze, we, me, ce.image[K]);
          }
        }
      }
      p(_) && d(i3.TEXTURE_CUBE_MAP), G.__version = J.version, _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function ge(E, _, N, $, J, G) {
    const ve = s.convert(N.format, N.colorSpace), le = s.convert(N.type), fe = b(N.internalFormat, ve, le, N.colorSpace), He = n.get(_), te = n.get(N);
    if (te.__renderTarget = _, !He.__hasExternalTextures) {
      const pe = Math.max(1, _.width >> G), be = Math.max(1, _.height >> G);
      J === i3.TEXTURE_3D || J === i3.TEXTURE_2D_ARRAY ? t.texImage3D(J, G, fe, pe, be, _.depth, 0, ve, le, null) : t.texImage2D(J, G, fe, pe, be, 0, ve, le, null);
    }
    t.bindFramebuffer(i3.FRAMEBUFFER, E), Be(_) ? o.framebufferTexture2DMultisampleEXT(i3.FRAMEBUFFER, $, J, te.__webglTexture, 0, Oe(_)) : (J === i3.TEXTURE_2D || J >= i3.TEXTURE_CUBE_MAP_POSITIVE_X && J <= i3.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i3.framebufferTexture2D(i3.FRAMEBUFFER, $, J, te.__webglTexture, G), t.bindFramebuffer(i3.FRAMEBUFFER, null);
  }
  function oe(E, _, N) {
    if (i3.bindRenderbuffer(i3.RENDERBUFFER, E), _.depthBuffer) {
      const $ = _.depthTexture, J = $ && $.isDepthTexture ? $.type : null, G = y(_.stencilBuffer, J), ve = _.stencilBuffer ? i3.DEPTH_STENCIL_ATTACHMENT : i3.DEPTH_ATTACHMENT, le = Oe(_);
      Be(_) ? o.renderbufferStorageMultisampleEXT(i3.RENDERBUFFER, le, G, _.width, _.height) : N ? i3.renderbufferStorageMultisample(i3.RENDERBUFFER, le, G, _.width, _.height) : i3.renderbufferStorage(i3.RENDERBUFFER, G, _.width, _.height), i3.framebufferRenderbuffer(i3.FRAMEBUFFER, ve, i3.RENDERBUFFER, E);
    } else {
      const $ = _.textures;
      for (let J = 0; J < $.length; J++) {
        const G = $[J], ve = s.convert(G.format, G.colorSpace), le = s.convert(G.type), fe = b(G.internalFormat, ve, le, G.colorSpace), He = Oe(_);
        N && Be(_) === false ? i3.renderbufferStorageMultisample(i3.RENDERBUFFER, He, fe, _.width, _.height) : Be(_) ? o.renderbufferStorageMultisampleEXT(i3.RENDERBUFFER, He, fe, _.width, _.height) : i3.renderbufferStorage(i3.RENDERBUFFER, fe, _.width, _.height);
      }
    }
    i3.bindRenderbuffer(i3.RENDERBUFFER, null);
  }
  function Te(E, _) {
    if (_ && _.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i3.FRAMEBUFFER, E), !(_.depthTexture && _.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const $ = n.get(_.depthTexture);
    $.__renderTarget = _, (!$.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = true), j(_.depthTexture, 0);
    const J = $.__webglTexture, G = Oe(_);
    if (_.depthTexture.format === di) Be(_) ? o.framebufferTexture2DMultisampleEXT(i3.FRAMEBUFFER, i3.DEPTH_ATTACHMENT, i3.TEXTURE_2D, J, 0, G) : i3.framebufferTexture2D(i3.FRAMEBUFFER, i3.DEPTH_ATTACHMENT, i3.TEXTURE_2D, J, 0);
    else if (_.depthTexture.format === gi) Be(_) ? o.framebufferTexture2DMultisampleEXT(i3.FRAMEBUFFER, i3.DEPTH_STENCIL_ATTACHMENT, i3.TEXTURE_2D, J, 0, G) : i3.framebufferTexture2D(i3.FRAMEBUFFER, i3.DEPTH_STENCIL_ATTACHMENT, i3.TEXTURE_2D, J, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function We(E) {
    const _ = n.get(E), N = E.isWebGLCubeRenderTarget === true;
    if (_.__boundDepthTexture !== E.depthTexture) {
      const $ = E.depthTexture;
      if (_.__depthDisposeCallback && _.__depthDisposeCallback(), $) {
        const J = () => {
          delete _.__boundDepthTexture, delete _.__depthDisposeCallback, $.removeEventListener("dispose", J);
        };
        $.addEventListener("dispose", J), _.__depthDisposeCallback = J;
      }
      _.__boundDepthTexture = $;
    }
    if (E.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (N) throw new Error("target.depthTexture not supported in Cube render targets");
      Te(_.__webglFramebuffer, E);
    } else if (N) {
      _.__webglDepthbuffer = [];
      for (let $ = 0; $ < 6; $++) if (t.bindFramebuffer(i3.FRAMEBUFFER, _.__webglFramebuffer[$]), _.__webglDepthbuffer[$] === void 0) _.__webglDepthbuffer[$] = i3.createRenderbuffer(), oe(_.__webglDepthbuffer[$], E, false);
      else {
        const J = E.stencilBuffer ? i3.DEPTH_STENCIL_ATTACHMENT : i3.DEPTH_ATTACHMENT, G = _.__webglDepthbuffer[$];
        i3.bindRenderbuffer(i3.RENDERBUFFER, G), i3.framebufferRenderbuffer(i3.FRAMEBUFFER, J, i3.RENDERBUFFER, G);
      }
    } else if (t.bindFramebuffer(i3.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer === void 0) _.__webglDepthbuffer = i3.createRenderbuffer(), oe(_.__webglDepthbuffer, E, false);
    else {
      const $ = E.stencilBuffer ? i3.DEPTH_STENCIL_ATTACHMENT : i3.DEPTH_ATTACHMENT, J = _.__webglDepthbuffer;
      i3.bindRenderbuffer(i3.RENDERBUFFER, J), i3.framebufferRenderbuffer(i3.FRAMEBUFFER, $, i3.RENDERBUFFER, J);
    }
    t.bindFramebuffer(i3.FRAMEBUFFER, null);
  }
  function Ae(E, _, N) {
    const $ = n.get(E);
    _ !== void 0 && ge($.__webglFramebuffer, E, E.texture, i3.COLOR_ATTACHMENT0, i3.TEXTURE_2D, 0), N !== void 0 && We(E);
  }
  function st(E) {
    const _ = E.texture, N = n.get(E), $ = n.get(_);
    E.addEventListener("dispose", w);
    const J = E.textures, G = E.isWebGLCubeRenderTarget === true, ve = J.length > 1;
    if (ve || ($.__webglTexture === void 0 && ($.__webglTexture = i3.createTexture()), $.__version = _.version, a.memory.textures++), G) {
      N.__webglFramebuffer = [];
      for (let le = 0; le < 6; le++) if (_.mipmaps && _.mipmaps.length > 0) {
        N.__webglFramebuffer[le] = [];
        for (let fe = 0; fe < _.mipmaps.length; fe++) N.__webglFramebuffer[le][fe] = i3.createFramebuffer();
      } else N.__webglFramebuffer[le] = i3.createFramebuffer();
    } else {
      if (_.mipmaps && _.mipmaps.length > 0) {
        N.__webglFramebuffer = [];
        for (let le = 0; le < _.mipmaps.length; le++) N.__webglFramebuffer[le] = i3.createFramebuffer();
      } else N.__webglFramebuffer = i3.createFramebuffer();
      if (ve) for (let le = 0, fe = J.length; le < fe; le++) {
        const He = n.get(J[le]);
        He.__webglTexture === void 0 && (He.__webglTexture = i3.createTexture(), a.memory.textures++);
      }
      if (E.samples > 0 && Be(E) === false) {
        N.__webglMultisampledFramebuffer = i3.createFramebuffer(), N.__webglColorRenderbuffer = [], t.bindFramebuffer(i3.FRAMEBUFFER, N.__webglMultisampledFramebuffer);
        for (let le = 0; le < J.length; le++) {
          const fe = J[le];
          N.__webglColorRenderbuffer[le] = i3.createRenderbuffer(), i3.bindRenderbuffer(i3.RENDERBUFFER, N.__webglColorRenderbuffer[le]);
          const He = s.convert(fe.format, fe.colorSpace), te = s.convert(fe.type), pe = b(fe.internalFormat, He, te, fe.colorSpace, E.isXRRenderTarget === true), be = Oe(E);
          i3.renderbufferStorageMultisample(i3.RENDERBUFFER, be, pe, E.width, E.height), i3.framebufferRenderbuffer(i3.FRAMEBUFFER, i3.COLOR_ATTACHMENT0 + le, i3.RENDERBUFFER, N.__webglColorRenderbuffer[le]);
        }
        i3.bindRenderbuffer(i3.RENDERBUFFER, null), E.depthBuffer && (N.__webglDepthRenderbuffer = i3.createRenderbuffer(), oe(N.__webglDepthRenderbuffer, E, true)), t.bindFramebuffer(i3.FRAMEBUFFER, null);
      }
    }
    if (G) {
      t.bindTexture(i3.TEXTURE_CUBE_MAP, $.__webglTexture), Ie(i3.TEXTURE_CUBE_MAP, _);
      for (let le = 0; le < 6; le++) if (_.mipmaps && _.mipmaps.length > 0) for (let fe = 0; fe < _.mipmaps.length; fe++) ge(N.__webglFramebuffer[le][fe], E, _, i3.COLOR_ATTACHMENT0, i3.TEXTURE_CUBE_MAP_POSITIVE_X + le, fe);
      else ge(N.__webglFramebuffer[le], E, _, i3.COLOR_ATTACHMENT0, i3.TEXTURE_CUBE_MAP_POSITIVE_X + le, 0);
      p(_) && d(i3.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ve) {
      for (let le = 0, fe = J.length; le < fe; le++) {
        const He = J[le], te = n.get(He);
        t.bindTexture(i3.TEXTURE_2D, te.__webglTexture), Ie(i3.TEXTURE_2D, He), ge(N.__webglFramebuffer, E, He, i3.COLOR_ATTACHMENT0 + le, i3.TEXTURE_2D, 0), p(He) && d(i3.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let le = i3.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (le = E.isWebGL3DRenderTarget ? i3.TEXTURE_3D : i3.TEXTURE_2D_ARRAY), t.bindTexture(le, $.__webglTexture), Ie(le, _), _.mipmaps && _.mipmaps.length > 0) for (let fe = 0; fe < _.mipmaps.length; fe++) ge(N.__webglFramebuffer[fe], E, _, i3.COLOR_ATTACHMENT0, le, fe);
      else ge(N.__webglFramebuffer, E, _, i3.COLOR_ATTACHMENT0, le, 0);
      p(_) && d(le), t.unbindTexture();
    }
    E.depthBuffer && We(E);
  }
  function nt(E) {
    const _ = E.textures;
    for (let N = 0, $ = _.length; N < $; N++) {
      const J = _[N];
      if (p(J)) {
        const G = A(E), ve = n.get(J).__webglTexture;
        t.bindTexture(G, ve), d(G), t.unbindTexture();
      }
    }
  }
  const Fe = [], T = [];
  function Ct(E) {
    if (E.samples > 0) {
      if (Be(E) === false) {
        const _ = E.textures, N = E.width, $ = E.height;
        let J = i3.COLOR_BUFFER_BIT;
        const G = E.stencilBuffer ? i3.DEPTH_STENCIL_ATTACHMENT : i3.DEPTH_ATTACHMENT, ve = n.get(E), le = _.length > 1;
        if (le) for (let fe = 0; fe < _.length; fe++) t.bindFramebuffer(i3.FRAMEBUFFER, ve.__webglMultisampledFramebuffer), i3.framebufferRenderbuffer(i3.FRAMEBUFFER, i3.COLOR_ATTACHMENT0 + fe, i3.RENDERBUFFER, null), t.bindFramebuffer(i3.FRAMEBUFFER, ve.__webglFramebuffer), i3.framebufferTexture2D(i3.DRAW_FRAMEBUFFER, i3.COLOR_ATTACHMENT0 + fe, i3.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i3.READ_FRAMEBUFFER, ve.__webglMultisampledFramebuffer), t.bindFramebuffer(i3.DRAW_FRAMEBUFFER, ve.__webglFramebuffer);
        for (let fe = 0; fe < _.length; fe++) {
          if (E.resolveDepthBuffer && (E.depthBuffer && (J |= i3.DEPTH_BUFFER_BIT), E.stencilBuffer && E.resolveStencilBuffer && (J |= i3.STENCIL_BUFFER_BIT)), le) {
            i3.framebufferRenderbuffer(i3.READ_FRAMEBUFFER, i3.COLOR_ATTACHMENT0, i3.RENDERBUFFER, ve.__webglColorRenderbuffer[fe]);
            const He = n.get(_[fe]).__webglTexture;
            i3.framebufferTexture2D(i3.DRAW_FRAMEBUFFER, i3.COLOR_ATTACHMENT0, i3.TEXTURE_2D, He, 0);
          }
          i3.blitFramebuffer(0, 0, N, $, 0, 0, N, $, J, i3.NEAREST), l === true && (Fe.length = 0, T.length = 0, Fe.push(i3.COLOR_ATTACHMENT0 + fe), E.depthBuffer && E.resolveDepthBuffer === false && (Fe.push(G), T.push(G), i3.invalidateFramebuffer(i3.DRAW_FRAMEBUFFER, T)), i3.invalidateFramebuffer(i3.READ_FRAMEBUFFER, Fe));
        }
        if (t.bindFramebuffer(i3.READ_FRAMEBUFFER, null), t.bindFramebuffer(i3.DRAW_FRAMEBUFFER, null), le) for (let fe = 0; fe < _.length; fe++) {
          t.bindFramebuffer(i3.FRAMEBUFFER, ve.__webglMultisampledFramebuffer), i3.framebufferRenderbuffer(i3.FRAMEBUFFER, i3.COLOR_ATTACHMENT0 + fe, i3.RENDERBUFFER, ve.__webglColorRenderbuffer[fe]);
          const He = n.get(_[fe]).__webglTexture;
          t.bindFramebuffer(i3.FRAMEBUFFER, ve.__webglFramebuffer), i3.framebufferTexture2D(i3.DRAW_FRAMEBUFFER, i3.COLOR_ATTACHMENT0 + fe, i3.TEXTURE_2D, He, 0);
        }
        t.bindFramebuffer(i3.DRAW_FRAMEBUFFER, ve.__webglMultisampledFramebuffer);
      } else if (E.depthBuffer && E.resolveDepthBuffer === false && l) {
        const _ = E.stencilBuffer ? i3.DEPTH_STENCIL_ATTACHMENT : i3.DEPTH_ATTACHMENT;
        i3.invalidateFramebuffer(i3.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function Oe(E) {
    return Math.min(r.maxSamples, E.samples);
  }
  function Be(E) {
    const _ = n.get(E);
    return E.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && _.__useRenderToTexture !== false;
  }
  function Me(E) {
    const _ = a.render.frame;
    u.get(E) !== _ && (u.set(E, _), E.update());
  }
  function et(E, _) {
    const N = E.colorSpace, $ = E.format, J = E.type;
    return E.isCompressedTexture === true || E.isVideoTexture === true || N !== vi && N !== vn && (Ge.getTransfer(N) === Ke ? ($ !== kt || J !== cn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", N)), _;
  }
  function xe(E) {
    return typeof HTMLImageElement < "u" && E instanceof HTMLImageElement ? (c.width = E.naturalWidth || E.width, c.height = E.naturalHeight || E.height) : typeof VideoFrame < "u" && E instanceof VideoFrame ? (c.width = E.displayWidth, c.height = E.displayHeight) : (c.width = E.width, c.height = E.height), c;
  }
  this.allocateTextureUnit = H, this.resetTextureUnits = W, this.setTexture2D = j, this.setTexture2DArray = Y, this.setTexture3D = Q, this.setTextureCube = V, this.rebindTextures = Ae, this.setupRenderTarget = st, this.updateRenderTargetMipmap = nt, this.updateMultisampleRenderTarget = Ct, this.setupDepthRenderbuffer = We, this.setupFrameBufferTexture = ge, this.useMultisampledRTT = Be;
}
function Op(i3, e) {
  function t(n, r = vn) {
    let s;
    const a = Ge.getTransfer(r);
    if (n === cn) return i3.UNSIGNED_BYTE;
    if (n === da) return i3.UNSIGNED_SHORT_4_4_4_4;
    if (n === ha) return i3.UNSIGNED_SHORT_5_5_5_1;
    if (n === Wo) return i3.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Vo) return i3.BYTE;
    if (n === Go) return i3.SHORT;
    if (n === Bi) return i3.UNSIGNED_SHORT;
    if (n === ua) return i3.INT;
    if (n === kn) return i3.UNSIGNED_INT;
    if (n === an) return i3.FLOAT;
    if (n === Hi) return i3.HALF_FLOAT;
    if (n === Xo) return i3.ALPHA;
    if (n === qo) return i3.RGB;
    if (n === kt) return i3.RGBA;
    if (n === Yo) return i3.LUMINANCE;
    if (n === $o) return i3.LUMINANCE_ALPHA;
    if (n === di) return i3.DEPTH_COMPONENT;
    if (n === gi) return i3.DEPTH_STENCIL;
    if (n === Ko) return i3.RED;
    if (n === fa) return i3.RED_INTEGER;
    if (n === Zo) return i3.RG;
    if (n === pa) return i3.RG_INTEGER;
    if (n === ma) return i3.RGBA_INTEGER;
    if (n === vr || n === xr || n === Sr || n === Mr) if (a === Ke) if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
      if (n === vr) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (n === xr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (n === Sr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (n === Mr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
      if (n === vr) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (n === xr) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (n === Sr) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (n === Mr) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (n === Cs || n === Ps || n === Ls || n === Ds) if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
      if (n === Cs) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (n === Ps) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (n === Ls) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (n === Ds) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (n === Us || n === Is || n === Ns) if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
      if (n === Us || n === Is) return a === Ke ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
      if (n === Ns) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (n === Fs || n === Os || n === Bs || n === zs || n === Hs || n === ks || n === Vs || n === Gs || n === Ws || n === Xs || n === qs || n === Ys || n === $s || n === Ks) if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
      if (n === Fs) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (n === Os) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (n === Bs) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (n === zs) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (n === Hs) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (n === ks) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (n === Vs) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (n === Gs) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (n === Ws) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (n === Xs) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (n === qs) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (n === Ys) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (n === $s) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (n === Ks) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (n === Er || n === Zs || n === js) if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
      if (n === Er) return a === Ke ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (n === Zs) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (n === js) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (n === jo || n === Js || n === Qs || n === ea) if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
      if (n === Er) return s.COMPRESSED_RED_RGTC1_EXT;
      if (n === Js) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (n === Qs) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (n === ea) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return n === _i ? i3.UNSIGNED_INT_24_8 : i3[n] !== void 0 ? i3[n] : null;
  }
  return { convert: t };
}
const Bp = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, zp = `
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
class Hp {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const r = new bt(), s = e.properties.get(r);
      s.__webglTexture = t.texture, (t.depthNear !== n.depthNear || t.depthFar !== n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = r;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new En({ vertexShader: Bp, fragmentShader: zp, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t.z }, depthHeight: { value: t.w } } });
      this.mesh = new Kt(new Ur(20, 20), n);
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
class kp extends Si {
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, a = null, o = "local-floor", l = 1, c = null, u = null, h = null, f = null, m = null, g = null;
    const v = new Hp(), p = t.getContextAttributes();
    let d = null, A = null;
    const b = [], y = [], U = new Ze();
    let L = null;
    const w = new It();
    w.viewport = new at();
    const I = new It();
    I.viewport = new at();
    const M = [w, I], S = new ou();
    let R = null, W = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(X) {
      let ne = b[X];
      return ne === void 0 && (ne = new as(), b[X] = ne), ne.getTargetRaySpace();
    }, this.getControllerGrip = function(X) {
      let ne = b[X];
      return ne === void 0 && (ne = new as(), b[X] = ne), ne.getGripSpace();
    }, this.getHand = function(X) {
      let ne = b[X];
      return ne === void 0 && (ne = new as(), b[X] = ne), ne.getHandSpace();
    };
    function H(X) {
      const ne = y.indexOf(X.inputSource);
      if (ne === -1) return;
      const ge = b[ne];
      ge !== void 0 && (ge.update(X.inputSource, X.frame, c || a), ge.dispatchEvent({ type: X.type, data: X.inputSource }));
    }
    function Z() {
      r.removeEventListener("select", H), r.removeEventListener("selectstart", H), r.removeEventListener("selectend", H), r.removeEventListener("squeeze", H), r.removeEventListener("squeezestart", H), r.removeEventListener("squeezeend", H), r.removeEventListener("end", Z), r.removeEventListener("inputsourceschange", j);
      for (let X = 0; X < b.length; X++) {
        const ne = y[X];
        ne !== null && (y[X] = null, b[X].disconnect(ne));
      }
      R = null, W = null, v.reset(), e.setRenderTarget(d), m = null, f = null, h = null, r = null, A = null, je.stop(), n.isPresenting = false, e.setPixelRatio(L), e.setSize(U.width, U.height, false), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(X) {
      s = X, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(X) {
      o = X, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(X) {
      c = X;
    }, this.getBaseLayer = function() {
      return f !== null ? f : m;
    }, this.getBinding = function() {
      return h;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(X) {
      if (r = X, r !== null) {
        if (d = e.getRenderTarget(), r.addEventListener("select", H), r.addEventListener("selectstart", H), r.addEventListener("selectend", H), r.addEventListener("squeeze", H), r.addEventListener("squeezestart", H), r.addEventListener("squeezeend", H), r.addEventListener("end", Z), r.addEventListener("inputsourceschange", j), p.xrCompatible !== true && await t.makeXRCompatible(), L = e.getPixelRatio(), e.getSize(U), typeof XRWebGLBinding < "u" && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let ge = null, oe = null, Te = null;
          p.depth && (Te = p.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ge = p.stencil ? gi : di, oe = p.stencil ? _i : kn);
          const We = { colorFormat: t.RGBA8, depthFormat: Te, scaleFactor: s };
          h = new XRWebGLBinding(r, t), f = h.createProjectionLayer(We), r.updateRenderState({ layers: [f] }), e.setPixelRatio(1), e.setSize(f.textureWidth, f.textureHeight, false), A = new Vn(f.textureWidth, f.textureHeight, { format: kt, type: cn, depthTexture: new pl(f.textureWidth, f.textureHeight, oe, void 0, void 0, void 0, void 0, void 0, void 0, ge), stencilBuffer: p.stencil, colorSpace: e.outputColorSpace, samples: p.antialias ? 4 : 0, resolveDepthBuffer: f.ignoreDepthValues === false });
        } else {
          const ge = { antialias: p.antialias, alpha: true, depth: p.depth, stencil: p.stencil, framebufferScaleFactor: s };
          m = new XRWebGLLayer(r, t, ge), r.updateRenderState({ baseLayer: m }), e.setPixelRatio(1), e.setSize(m.framebufferWidth, m.framebufferHeight, false), A = new Vn(m.framebufferWidth, m.framebufferHeight, { format: kt, type: cn, colorSpace: e.outputColorSpace, stencilBuffer: p.stencil });
        }
        A.isXRRenderTarget = true, this.setFoveation(l), c = null, a = await r.requestReferenceSpace(o), je.setContext(r), je.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null) return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return v.getDepthTexture();
    };
    function j(X) {
      for (let ne = 0; ne < X.removed.length; ne++) {
        const ge = X.removed[ne], oe = y.indexOf(ge);
        oe >= 0 && (y[oe] = null, b[oe].disconnect(ge));
      }
      for (let ne = 0; ne < X.added.length; ne++) {
        const ge = X.added[ne];
        let oe = y.indexOf(ge);
        if (oe === -1) {
          for (let We = 0; We < b.length; We++) if (We >= y.length) {
            y.push(ge), oe = We;
            break;
          } else if (y[We] === null) {
            y[We] = ge, oe = We;
            break;
          }
          if (oe === -1) break;
        }
        const Te = b[oe];
        Te && Te.connect(ge);
      }
    }
    const Y = new B(), Q = new B();
    function V(X, ne, ge) {
      Y.setFromMatrixPosition(ne.matrixWorld), Q.setFromMatrixPosition(ge.matrixWorld);
      const oe = Y.distanceTo(Q), Te = ne.projectionMatrix.elements, We = ge.projectionMatrix.elements, Ae = Te[14] / (Te[10] - 1), st = Te[14] / (Te[10] + 1), nt = (Te[9] + 1) / Te[5], Fe = (Te[9] - 1) / Te[5], T = (Te[8] - 1) / Te[0], Ct = (We[8] + 1) / We[0], Oe = Ae * T, Be = Ae * Ct, Me = oe / (-T + Ct), et = Me * -T;
      if (ne.matrixWorld.decompose(X.position, X.quaternion, X.scale), X.translateX(et), X.translateZ(Me), X.matrixWorld.compose(X.position, X.quaternion, X.scale), X.matrixWorldInverse.copy(X.matrixWorld).invert(), Te[10] === -1) X.projectionMatrix.copy(ne.projectionMatrix), X.projectionMatrixInverse.copy(ne.projectionMatrixInverse);
      else {
        const xe = Ae + Me, E = st + Me, _ = Oe - et, N = Be + (oe - et), $ = nt * st / E * xe, J = Fe * st / E * xe;
        X.projectionMatrix.makePerspective(_, N, $, J, xe, E), X.projectionMatrixInverse.copy(X.projectionMatrix).invert();
      }
    }
    function ae(X, ne) {
      ne === null ? X.matrixWorld.copy(X.matrix) : X.matrixWorld.multiplyMatrices(ne.matrixWorld, X.matrix), X.matrixWorldInverse.copy(X.matrixWorld).invert();
    }
    this.updateCamera = function(X) {
      if (r === null) return;
      let ne = X.near, ge = X.far;
      v.texture !== null && (v.depthNear > 0 && (ne = v.depthNear), v.depthFar > 0 && (ge = v.depthFar)), S.near = I.near = w.near = ne, S.far = I.far = w.far = ge, (R !== S.near || W !== S.far) && (r.updateRenderState({ depthNear: S.near, depthFar: S.far }), R = S.near, W = S.far), w.layers.mask = X.layers.mask | 2, I.layers.mask = X.layers.mask | 4, S.layers.mask = w.layers.mask | I.layers.mask;
      const oe = X.parent, Te = S.cameras;
      ae(S, oe);
      for (let We = 0; We < Te.length; We++) ae(Te[We], oe);
      Te.length === 2 ? V(S, w, I) : S.projectionMatrix.copy(w.projectionMatrix), he(X, S, oe);
    };
    function he(X, ne, ge) {
      ge === null ? X.matrix.copy(ne.matrixWorld) : (X.matrix.copy(ge.matrixWorld), X.matrix.invert(), X.matrix.multiply(ne.matrixWorld)), X.matrix.decompose(X.position, X.quaternion, X.scale), X.updateMatrixWorld(true), X.projectionMatrix.copy(ne.projectionMatrix), X.projectionMatrixInverse.copy(ne.projectionMatrixInverse), X.isPerspectiveCamera && (X.fov = ta * 2 * Math.atan(1 / X.projectionMatrix.elements[5]), X.zoom = 1);
    }
    this.getCamera = function() {
      return S;
    }, this.getFoveation = function() {
      if (!(f === null && m === null)) return l;
    }, this.setFoveation = function(X) {
      l = X, f !== null && (f.fixedFoveation = X), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = X);
    }, this.hasDepthSensing = function() {
      return v.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return v.getMesh(S);
    };
    let Se = null;
    function Ie(X, ne) {
      if (u = ne.getViewerPose(c || a), g = ne, u !== null) {
        const ge = u.views;
        m !== null && (e.setRenderTargetFramebuffer(A, m.framebuffer), e.setRenderTarget(A));
        let oe = false;
        ge.length !== S.cameras.length && (S.cameras.length = 0, oe = true);
        for (let Ae = 0; Ae < ge.length; Ae++) {
          const st = ge[Ae];
          let nt = null;
          if (m !== null) nt = m.getViewport(st);
          else {
            const T = h.getViewSubImage(f, st);
            nt = T.viewport, Ae === 0 && (e.setRenderTargetTextures(A, T.colorTexture, f.ignoreDepthValues ? void 0 : T.depthStencilTexture), e.setRenderTarget(A));
          }
          let Fe = M[Ae];
          Fe === void 0 && (Fe = new It(), Fe.layers.enable(Ae), Fe.viewport = new at(), M[Ae] = Fe), Fe.matrix.fromArray(st.transform.matrix), Fe.matrix.decompose(Fe.position, Fe.quaternion, Fe.scale), Fe.projectionMatrix.fromArray(st.projectionMatrix), Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(), Fe.viewport.set(nt.x, nt.y, nt.width, nt.height), Ae === 0 && (S.matrix.copy(Fe.matrix), S.matrix.decompose(S.position, S.quaternion, S.scale)), oe === true && S.cameras.push(Fe);
        }
        const Te = r.enabledFeatures;
        if (Te && Te.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && h) {
          const Ae = h.getDepthInformation(ge[0]);
          Ae && Ae.isValid && Ae.texture && v.init(e, Ae, r.renderState);
        }
      }
      for (let ge = 0; ge < b.length; ge++) {
        const oe = y[ge], Te = b[ge];
        oe !== null && Te !== void 0 && Te.update(oe, ne, c || a);
      }
      Se && Se(X, ne), ne.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: ne }), g = null;
    }
    const je = new ml();
    je.setAnimationLoop(Ie), this.setAnimationLoop = function(X) {
      Se = X;
    }, this.dispose = function() {
    };
  }
}
const In = new un(), Vp = new ot();
function Gp(i3, e) {
  function t(p, d) {
    p.matrixAutoUpdate === true && p.updateMatrix(), d.value.copy(p.matrix);
  }
  function n(p, d) {
    d.color.getRGB(p.fogColor.value, cl(i3)), d.isFog ? (p.fogNear.value = d.near, p.fogFar.value = d.far) : d.isFogExp2 && (p.fogDensity.value = d.density);
  }
  function r(p, d, A, b, y) {
    d.isMeshBasicMaterial || d.isMeshLambertMaterial ? s(p, d) : d.isMeshToonMaterial ? (s(p, d), h(p, d)) : d.isMeshPhongMaterial ? (s(p, d), u(p, d)) : d.isMeshStandardMaterial ? (s(p, d), f(p, d), d.isMeshPhysicalMaterial && m(p, d, y)) : d.isMeshMatcapMaterial ? (s(p, d), g(p, d)) : d.isMeshDepthMaterial ? s(p, d) : d.isMeshDistanceMaterial ? (s(p, d), v(p, d)) : d.isMeshNormalMaterial ? s(p, d) : d.isLineBasicMaterial ? (a(p, d), d.isLineDashedMaterial && o(p, d)) : d.isPointsMaterial ? l(p, d, A, b) : d.isSpriteMaterial ? c(p, d) : d.isShadowMaterial ? (p.color.value.copy(d.color), p.opacity.value = d.opacity) : d.isShaderMaterial && (d.uniformsNeedUpdate = false);
  }
  function s(p, d) {
    p.opacity.value = d.opacity, d.color && p.diffuse.value.copy(d.color), d.emissive && p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity), d.map && (p.map.value = d.map, t(d.map, p.mapTransform)), d.alphaMap && (p.alphaMap.value = d.alphaMap, t(d.alphaMap, p.alphaMapTransform)), d.bumpMap && (p.bumpMap.value = d.bumpMap, t(d.bumpMap, p.bumpMapTransform), p.bumpScale.value = d.bumpScale, d.side === yt && (p.bumpScale.value *= -1)), d.normalMap && (p.normalMap.value = d.normalMap, t(d.normalMap, p.normalMapTransform), p.normalScale.value.copy(d.normalScale), d.side === yt && p.normalScale.value.negate()), d.displacementMap && (p.displacementMap.value = d.displacementMap, t(d.displacementMap, p.displacementMapTransform), p.displacementScale.value = d.displacementScale, p.displacementBias.value = d.displacementBias), d.emissiveMap && (p.emissiveMap.value = d.emissiveMap, t(d.emissiveMap, p.emissiveMapTransform)), d.specularMap && (p.specularMap.value = d.specularMap, t(d.specularMap, p.specularMapTransform)), d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
    const A = e.get(d), b = A.envMap, y = A.envMapRotation;
    b && (p.envMap.value = b, In.copy(y), In.x *= -1, In.y *= -1, In.z *= -1, b.isCubeTexture && b.isRenderTargetTexture === false && (In.y *= -1, In.z *= -1), p.envMapRotation.value.setFromMatrix4(Vp.makeRotationFromEuler(In)), p.flipEnvMap.value = b.isCubeTexture && b.isRenderTargetTexture === false ? -1 : 1, p.reflectivity.value = d.reflectivity, p.ior.value = d.ior, p.refractionRatio.value = d.refractionRatio), d.lightMap && (p.lightMap.value = d.lightMap, p.lightMapIntensity.value = d.lightMapIntensity, t(d.lightMap, p.lightMapTransform)), d.aoMap && (p.aoMap.value = d.aoMap, p.aoMapIntensity.value = d.aoMapIntensity, t(d.aoMap, p.aoMapTransform));
  }
  function a(p, d) {
    p.diffuse.value.copy(d.color), p.opacity.value = d.opacity, d.map && (p.map.value = d.map, t(d.map, p.mapTransform));
  }
  function o(p, d) {
    p.dashSize.value = d.dashSize, p.totalSize.value = d.dashSize + d.gapSize, p.scale.value = d.scale;
  }
  function l(p, d, A, b) {
    p.diffuse.value.copy(d.color), p.opacity.value = d.opacity, p.size.value = d.size * A, p.scale.value = b * 0.5, d.map && (p.map.value = d.map, t(d.map, p.uvTransform)), d.alphaMap && (p.alphaMap.value = d.alphaMap, t(d.alphaMap, p.alphaMapTransform)), d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
  }
  function c(p, d) {
    p.diffuse.value.copy(d.color), p.opacity.value = d.opacity, p.rotation.value = d.rotation, d.map && (p.map.value = d.map, t(d.map, p.mapTransform)), d.alphaMap && (p.alphaMap.value = d.alphaMap, t(d.alphaMap, p.alphaMapTransform)), d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
  }
  function u(p, d) {
    p.specular.value.copy(d.specular), p.shininess.value = Math.max(d.shininess, 1e-4);
  }
  function h(p, d) {
    d.gradientMap && (p.gradientMap.value = d.gradientMap);
  }
  function f(p, d) {
    p.metalness.value = d.metalness, d.metalnessMap && (p.metalnessMap.value = d.metalnessMap, t(d.metalnessMap, p.metalnessMapTransform)), p.roughness.value = d.roughness, d.roughnessMap && (p.roughnessMap.value = d.roughnessMap, t(d.roughnessMap, p.roughnessMapTransform)), d.envMap && (p.envMapIntensity.value = d.envMapIntensity);
  }
  function m(p, d, A) {
    p.ior.value = d.ior, d.sheen > 0 && (p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen), p.sheenRoughness.value = d.sheenRoughness, d.sheenColorMap && (p.sheenColorMap.value = d.sheenColorMap, t(d.sheenColorMap, p.sheenColorMapTransform)), d.sheenRoughnessMap && (p.sheenRoughnessMap.value = d.sheenRoughnessMap, t(d.sheenRoughnessMap, p.sheenRoughnessMapTransform))), d.clearcoat > 0 && (p.clearcoat.value = d.clearcoat, p.clearcoatRoughness.value = d.clearcoatRoughness, d.clearcoatMap && (p.clearcoatMap.value = d.clearcoatMap, t(d.clearcoatMap, p.clearcoatMapTransform)), d.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap, t(d.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), d.clearcoatNormalMap && (p.clearcoatNormalMap.value = d.clearcoatNormalMap, t(d.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale), d.side === yt && p.clearcoatNormalScale.value.negate())), d.dispersion > 0 && (p.dispersion.value = d.dispersion), d.iridescence > 0 && (p.iridescence.value = d.iridescence, p.iridescenceIOR.value = d.iridescenceIOR, p.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1], d.iridescenceMap && (p.iridescenceMap.value = d.iridescenceMap, t(d.iridescenceMap, p.iridescenceMapTransform)), d.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = d.iridescenceThicknessMap, t(d.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), d.transmission > 0 && (p.transmission.value = d.transmission, p.transmissionSamplerMap.value = A.texture, p.transmissionSamplerSize.value.set(A.width, A.height), d.transmissionMap && (p.transmissionMap.value = d.transmissionMap, t(d.transmissionMap, p.transmissionMapTransform)), p.thickness.value = d.thickness, d.thicknessMap && (p.thicknessMap.value = d.thicknessMap, t(d.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = d.attenuationDistance, p.attenuationColor.value.copy(d.attenuationColor)), d.anisotropy > 0 && (p.anisotropyVector.value.set(d.anisotropy * Math.cos(d.anisotropyRotation), d.anisotropy * Math.sin(d.anisotropyRotation)), d.anisotropyMap && (p.anisotropyMap.value = d.anisotropyMap, t(d.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = d.specularIntensity, p.specularColor.value.copy(d.specularColor), d.specularColorMap && (p.specularColorMap.value = d.specularColorMap, t(d.specularColorMap, p.specularColorMapTransform)), d.specularIntensityMap && (p.specularIntensityMap.value = d.specularIntensityMap, t(d.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, d) {
    d.matcap && (p.matcap.value = d.matcap);
  }
  function v(p, d) {
    const A = e.get(d).light;
    p.referencePosition.value.setFromMatrixPosition(A.matrixWorld), p.nearDistance.value = A.shadow.camera.near, p.farDistance.value = A.shadow.camera.far;
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: r };
}
function Wp(i3, e, t, n) {
  let r = {}, s = {}, a = [];
  const o = i3.getParameter(i3.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(A, b) {
    const y = b.program;
    n.uniformBlockBinding(A, y);
  }
  function c(A, b) {
    let y = r[A.id];
    y === void 0 && (g(A), y = u(A), r[A.id] = y, A.addEventListener("dispose", p));
    const U = b.program;
    n.updateUBOMapping(A, U);
    const L = e.render.frame;
    s[A.id] !== L && (f(A), s[A.id] = L);
  }
  function u(A) {
    const b = h();
    A.__bindingPointIndex = b;
    const y = i3.createBuffer(), U = A.__size, L = A.usage;
    return i3.bindBuffer(i3.UNIFORM_BUFFER, y), i3.bufferData(i3.UNIFORM_BUFFER, U, L), i3.bindBuffer(i3.UNIFORM_BUFFER, null), i3.bindBufferBase(i3.UNIFORM_BUFFER, b, y), y;
  }
  function h() {
    for (let A = 0; A < o; A++) if (a.indexOf(A) === -1) return a.push(A), A;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(A) {
    const b = r[A.id], y = A.uniforms, U = A.__cache;
    i3.bindBuffer(i3.UNIFORM_BUFFER, b);
    for (let L = 0, w = y.length; L < w; L++) {
      const I = Array.isArray(y[L]) ? y[L] : [y[L]];
      for (let M = 0, S = I.length; M < S; M++) {
        const R = I[M];
        if (m(R, L, M, U) === true) {
          const W = R.__offset, H = Array.isArray(R.value) ? R.value : [R.value];
          let Z = 0;
          for (let j = 0; j < H.length; j++) {
            const Y = H[j], Q = v(Y);
            typeof Y == "number" || typeof Y == "boolean" ? (R.__data[0] = Y, i3.bufferSubData(i3.UNIFORM_BUFFER, W + Z, R.__data)) : Y.isMatrix3 ? (R.__data[0] = Y.elements[0], R.__data[1] = Y.elements[1], R.__data[2] = Y.elements[2], R.__data[3] = 0, R.__data[4] = Y.elements[3], R.__data[5] = Y.elements[4], R.__data[6] = Y.elements[5], R.__data[7] = 0, R.__data[8] = Y.elements[6], R.__data[9] = Y.elements[7], R.__data[10] = Y.elements[8], R.__data[11] = 0) : (Y.toArray(R.__data, Z), Z += Q.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i3.bufferSubData(i3.UNIFORM_BUFFER, W, R.__data);
        }
      }
    }
    i3.bindBuffer(i3.UNIFORM_BUFFER, null);
  }
  function m(A, b, y, U) {
    const L = A.value, w = b + "_" + y;
    if (U[w] === void 0) return typeof L == "number" || typeof L == "boolean" ? U[w] = L : U[w] = L.clone(), true;
    {
      const I = U[w];
      if (typeof L == "number" || typeof L == "boolean") {
        if (I !== L) return U[w] = L, true;
      } else if (I.equals(L) === false) return I.copy(L), true;
    }
    return false;
  }
  function g(A) {
    const b = A.uniforms;
    let y = 0;
    const U = 16;
    for (let w = 0, I = b.length; w < I; w++) {
      const M = Array.isArray(b[w]) ? b[w] : [b[w]];
      for (let S = 0, R = M.length; S < R; S++) {
        const W = M[S], H = Array.isArray(W.value) ? W.value : [W.value];
        for (let Z = 0, j = H.length; Z < j; Z++) {
          const Y = H[Z], Q = v(Y), V = y % U, ae = V % Q.boundary, he = V + ae;
          y += ae, he !== 0 && U - he < Q.storage && (y += U - he), W.__data = new Float32Array(Q.storage / Float32Array.BYTES_PER_ELEMENT), W.__offset = y, y += Q.storage;
        }
      }
    }
    const L = y % U;
    return L > 0 && (y += U - L), A.__size = y, A.__cache = {}, this;
  }
  function v(A) {
    const b = { boundary: 0, storage: 0 };
    return typeof A == "number" || typeof A == "boolean" ? (b.boundary = 4, b.storage = 4) : A.isVector2 ? (b.boundary = 8, b.storage = 8) : A.isVector3 || A.isColor ? (b.boundary = 16, b.storage = 12) : A.isVector4 ? (b.boundary = 16, b.storage = 16) : A.isMatrix3 ? (b.boundary = 48, b.storage = 48) : A.isMatrix4 ? (b.boundary = 64, b.storage = 64) : A.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", A), b;
  }
  function p(A) {
    const b = A.target;
    b.removeEventListener("dispose", p);
    const y = a.indexOf(b.__bindingPointIndex);
    a.splice(y, 1), i3.deleteBuffer(r[b.id]), delete r[b.id], delete s[b.id];
  }
  function d() {
    for (const A in r) i3.deleteBuffer(r[A]);
    a = [], r = {}, s = {};
  }
  return { bind: l, update: c, dispose: d };
}
class Xp {
  constructor(e = {}) {
    const { canvas: t = bc(), context: n = null, depth: r = true, stencil: s = false, alpha: a = false, antialias: o = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: u = "default", failIfMajorPerformanceCaveat: h = false, reverseDepthBuffer: f = false } = e;
    this.isWebGLRenderer = true;
    let m;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      m = n.getContextAttributes().alpha;
    } else m = a;
    const g = new Uint32Array(4), v = new Int32Array(4);
    let p = null, d = null;
    const A = [], b = [];
    this.domElement = t, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this._outputColorSpace = Ut, this.toneMapping = Sn, this.toneMappingExposure = 1;
    const y = this;
    let U = false, L = 0, w = 0, I = null, M = -1, S = null;
    const R = new at(), W = new at();
    let H = null;
    const Z = new Xe(0);
    let j = 0, Y = t.width, Q = t.height, V = 1, ae = null, he = null;
    const Se = new at(0, 0, Y, Q), Ie = new at(0, 0, Y, Q);
    let je = false;
    const X = new hl();
    let ne = false, ge = false;
    this.transmissionResolutionScale = 1;
    const oe = new ot(), Te = new ot(), We = new B(), Ae = new at(), st = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let nt = false;
    function Fe() {
      return I === null ? V : 1;
    }
    let T = n;
    function Ct(x, P) {
      return t.getContext(x, P);
    }
    try {
      const x = { alpha: true, depth: r, stencil: s, antialias: o, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: u, failIfMajorPerformanceCaveat: h };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${ca}`), t.addEventListener("webglcontextlost", K, false), t.addEventListener("webglcontextrestored", ue, false), t.addEventListener("webglcontextcreationerror", ce, false), T === null) {
        const P = "webgl2";
        if (T = Ct(P, x), T === null) throw Ct(P) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (x) {
      throw console.error("THREE.WebGLRenderer: " + x.message), x;
    }
    let Oe, Be, Me, et, xe, E, _, N, $, J, G, ve, le, fe, He, te, pe, be, we, me, ze, De, Je, C;
    function re() {
      Oe = new ef(T), Oe.init(), De = new Op(T, Oe), Be = new $h(T, Oe, e, De), Me = new Np(T, Oe), Be.reverseDepthBuffer && f && Me.buffers.depth.setReversed(true), et = new rf(T), xe = new Ep(), E = new Fp(T, Oe, Me, xe, Be, De, et), _ = new Zh(y), N = new Qh(y), $ = new uu(T), Je = new qh(T, $), J = new tf(T, $, et, Je), G = new af(T, J, $, et), we = new sf(T, Be, E), te = new Kh(xe), ve = new Mp(y, _, N, Oe, Be, Je, te), le = new Gp(y, xe), fe = new bp(), He = new Pp(Oe), be = new Xh(y, _, N, Me, G, m, l), pe = new Up(y, G, Be), C = new Wp(T, et, Be, Me), me = new Yh(T, Oe, et), ze = new nf(T, Oe, et), et.programs = ve.programs, y.capabilities = Be, y.extensions = Oe, y.properties = xe, y.renderLists = fe, y.shadowMap = pe, y.state = Me, y.info = et;
    }
    re();
    const k = new kp(y, T);
    this.xr = k, this.getContext = function() {
      return T;
    }, this.getContextAttributes = function() {
      return T.getContextAttributes();
    }, this.forceContextLoss = function() {
      const x = Oe.get("WEBGL_lose_context");
      x && x.loseContext();
    }, this.forceContextRestore = function() {
      const x = Oe.get("WEBGL_lose_context");
      x && x.restoreContext();
    }, this.getPixelRatio = function() {
      return V;
    }, this.setPixelRatio = function(x) {
      x !== void 0 && (V = x, this.setSize(Y, Q, false));
    }, this.getSize = function(x) {
      return x.set(Y, Q);
    }, this.setSize = function(x, P, O = true) {
      if (k.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      Y = x, Q = P, t.width = Math.floor(x * V), t.height = Math.floor(P * V), O === true && (t.style.width = x + "px", t.style.height = P + "px"), this.setViewport(0, 0, x, P);
    }, this.getDrawingBufferSize = function(x) {
      return x.set(Y * V, Q * V).floor();
    }, this.setDrawingBufferSize = function(x, P, O) {
      Y = x, Q = P, V = O, t.width = Math.floor(x * O), t.height = Math.floor(P * O), this.setViewport(0, 0, x, P);
    }, this.getCurrentViewport = function(x) {
      return x.copy(R);
    }, this.getViewport = function(x) {
      return x.copy(Se);
    }, this.setViewport = function(x, P, O, z) {
      x.isVector4 ? Se.set(x.x, x.y, x.z, x.w) : Se.set(x, P, O, z), Me.viewport(R.copy(Se).multiplyScalar(V).round());
    }, this.getScissor = function(x) {
      return x.copy(Ie);
    }, this.setScissor = function(x, P, O, z) {
      x.isVector4 ? Ie.set(x.x, x.y, x.z, x.w) : Ie.set(x, P, O, z), Me.scissor(W.copy(Ie).multiplyScalar(V).round());
    }, this.getScissorTest = function() {
      return je;
    }, this.setScissorTest = function(x) {
      Me.setScissorTest(je = x);
    }, this.setOpaqueSort = function(x) {
      ae = x;
    }, this.setTransparentSort = function(x) {
      he = x;
    }, this.getClearColor = function(x) {
      return x.copy(be.getClearColor());
    }, this.setClearColor = function() {
      be.setClearColor.apply(be, arguments);
    }, this.getClearAlpha = function() {
      return be.getClearAlpha();
    }, this.setClearAlpha = function() {
      be.setClearAlpha.apply(be, arguments);
    }, this.clear = function(x = true, P = true, O = true) {
      let z = 0;
      if (x) {
        let D = false;
        if (I !== null) {
          const ee = I.texture.format;
          D = ee === ma || ee === pa || ee === fa;
        }
        if (D) {
          const ee = I.texture.type, se = ee === cn || ee === kn || ee === Bi || ee === _i || ee === da || ee === ha, de = be.getClearColor(), _e = be.getClearAlpha(), Re = de.r, Ce = de.g, Ee = de.b;
          se ? (g[0] = Re, g[1] = Ce, g[2] = Ee, g[3] = _e, T.clearBufferuiv(T.COLOR, 0, g)) : (v[0] = Re, v[1] = Ce, v[2] = Ee, v[3] = _e, T.clearBufferiv(T.COLOR, 0, v));
        } else z |= T.COLOR_BUFFER_BIT;
      }
      P && (z |= T.DEPTH_BUFFER_BIT), O && (z |= T.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), T.clear(z);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", K, false), t.removeEventListener("webglcontextrestored", ue, false), t.removeEventListener("webglcontextcreationerror", ce, false), be.dispose(), fe.dispose(), He.dispose(), xe.dispose(), _.dispose(), N.dispose(), G.dispose(), Je.dispose(), C.dispose(), ve.dispose(), k.dispose(), k.removeEventListener("sessionstart", Ma), k.removeEventListener("sessionend", Ea), wn.stop();
    };
    function K(x) {
      x.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), U = true;
    }
    function ue() {
      console.log("THREE.WebGLRenderer: Context Restored."), U = false;
      const x = et.autoReset, P = pe.enabled, O = pe.autoUpdate, z = pe.needsUpdate, D = pe.type;
      re(), et.autoReset = x, pe.enabled = P, pe.autoUpdate = O, pe.needsUpdate = z, pe.type = D;
    }
    function ce(x) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
    }
    function Pe(x) {
      const P = x.target;
      P.removeEventListener("dispose", Pe), it(P);
    }
    function it(x) {
      mt(x), xe.remove(x);
    }
    function mt(x) {
      const P = xe.get(x).programs;
      P !== void 0 && (P.forEach(function(O) {
        ve.releaseProgram(O);
      }), x.isShaderMaterial && ve.releaseShaderCache(x));
    }
    this.renderBufferDirect = function(x, P, O, z, D, ee) {
      P === null && (P = st);
      const se = D.isMesh && D.matrixWorld.determinant() < 0, de = Pl(x, P, O, z, D);
      Me.setMaterial(z, se);
      let _e = O.index, Re = 1;
      if (z.wireframe === true) {
        if (_e = J.getWireframeAttribute(O), _e === void 0) return;
        Re = 2;
      }
      const Ce = O.drawRange, Ee = O.attributes.position;
      let ke = Ce.start * Re, qe = (Ce.start + Ce.count) * Re;
      ee !== null && (ke = Math.max(ke, ee.start * Re), qe = Math.min(qe, (ee.start + ee.count) * Re)), _e !== null ? (ke = Math.max(ke, 0), qe = Math.min(qe, _e.count)) : Ee != null && (ke = Math.max(ke, 0), qe = Math.min(qe, Ee.count));
      const lt = qe - ke;
      if (lt < 0 || lt === 1 / 0) return;
      Je.setup(D, z, de, O, _e);
      let rt, Ve = me;
      if (_e !== null && (rt = $.get(_e), Ve = ze, Ve.setIndex(rt)), D.isMesh) z.wireframe === true ? (Me.setLineWidth(z.wireframeLinewidth * Fe()), Ve.setMode(T.LINES)) : Ve.setMode(T.TRIANGLES);
      else if (D.isLine) {
        let ye = z.linewidth;
        ye === void 0 && (ye = 1), Me.setLineWidth(ye * Fe()), D.isLineSegments ? Ve.setMode(T.LINES) : D.isLineLoop ? Ve.setMode(T.LINE_LOOP) : Ve.setMode(T.LINE_STRIP);
      } else D.isPoints ? Ve.setMode(T.POINTS) : D.isSprite && Ve.setMode(T.TRIANGLES);
      if (D.isBatchedMesh) if (D._multiDrawInstances !== null) Ve.renderMultiDrawInstances(D._multiDrawStarts, D._multiDrawCounts, D._multiDrawCount, D._multiDrawInstances);
      else if (Oe.get("WEBGL_multi_draw")) Ve.renderMultiDraw(D._multiDrawStarts, D._multiDrawCounts, D._multiDrawCount);
      else {
        const ye = D._multiDrawStarts, pt = D._multiDrawCounts, Ye = D._multiDrawCount, Ft = _e ? $.get(_e).bytesPerElement : 1, Wn = xe.get(z).currentProgram.getUniforms();
        for (let At = 0; At < Ye; At++) Wn.setValue(T, "_gl_DrawID", At), Ve.render(ye[At] / Ft, pt[At]);
      }
      else if (D.isInstancedMesh) Ve.renderInstances(ke, lt, D.count);
      else if (O.isInstancedBufferGeometry) {
        const ye = O._maxInstanceCount !== void 0 ? O._maxInstanceCount : 1 / 0, pt = Math.min(O.instanceCount, ye);
        Ve.renderInstances(ke, lt, pt);
      } else Ve.render(ke, lt);
    };
    function $e(x, P, O) {
      x.transparent === true && x.side === sn && x.forceSinglePass === false ? (x.side = yt, x.needsUpdate = true, Xi(x, P, O), x.side = Mn, x.needsUpdate = true, Xi(x, P, O), x.side = sn) : Xi(x, P, O);
    }
    this.compile = function(x, P, O = null) {
      O === null && (O = x), d = He.get(O), d.init(P), b.push(d), O.traverseVisible(function(D) {
        D.isLight && D.layers.test(P.layers) && (d.pushLight(D), D.castShadow && d.pushShadow(D));
      }), x !== O && x.traverseVisible(function(D) {
        D.isLight && D.layers.test(P.layers) && (d.pushLight(D), D.castShadow && d.pushShadow(D));
      }), d.setupLights();
      const z = /* @__PURE__ */ new Set();
      return x.traverse(function(D) {
        if (!(D.isMesh || D.isPoints || D.isLine || D.isSprite)) return;
        const ee = D.material;
        if (ee) if (Array.isArray(ee)) for (let se = 0; se < ee.length; se++) {
          const de = ee[se];
          $e(de, O, D), z.add(de);
        }
        else $e(ee, O, D), z.add(ee);
      }), b.pop(), d = null, z;
    }, this.compileAsync = function(x, P, O = null) {
      const z = this.compile(x, P, O);
      return new Promise((D) => {
        function ee() {
          if (z.forEach(function(se) {
            xe.get(se).currentProgram.isReady() && z.delete(se);
          }), z.size === 0) {
            D(x);
            return;
          }
          setTimeout(ee, 10);
        }
        Oe.get("KHR_parallel_shader_compile") !== null ? ee() : setTimeout(ee, 10);
      });
    };
    let Nt = null;
    function jt(x) {
      Nt && Nt(x);
    }
    function Ma() {
      wn.stop();
    }
    function Ea() {
      wn.start();
    }
    const wn = new ml();
    wn.setAnimationLoop(jt), typeof self < "u" && wn.setContext(self), this.setAnimationLoop = function(x) {
      Nt = x, k.setAnimationLoop(x), x === null ? wn.stop() : wn.start();
    }, k.addEventListener("sessionstart", Ma), k.addEventListener("sessionend", Ea), this.render = function(x, P) {
      if (P !== void 0 && P.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (U === true) return;
      if (x.matrixWorldAutoUpdate === true && x.updateMatrixWorld(), P.parent === null && P.matrixWorldAutoUpdate === true && P.updateMatrixWorld(), k.enabled === true && k.isPresenting === true && (k.cameraAutoUpdate === true && k.updateCamera(P), P = k.getCamera()), x.isScene === true && x.onBeforeRender(y, x, P, I), d = He.get(x, b.length), d.init(P), b.push(d), Te.multiplyMatrices(P.projectionMatrix, P.matrixWorldInverse), X.setFromProjectionMatrix(Te), ge = this.localClippingEnabled, ne = te.init(this.clippingPlanes, ge), p = fe.get(x, A.length), p.init(), A.push(p), k.enabled === true && k.isPresenting === true) {
        const ee = y.xr.getDepthSensingMesh();
        ee !== null && Fr(ee, P, -1 / 0, y.sortObjects);
      }
      Fr(x, P, 0, y.sortObjects), p.finish(), y.sortObjects === true && p.sort(ae, he), nt = k.enabled === false || k.isPresenting === false || k.hasDepthSensing() === false, nt && be.addToRenderList(p, x), this.info.render.frame++, ne === true && te.beginShadows();
      const O = d.state.shadowsArray;
      pe.render(O, x, P), ne === true && te.endShadows(), this.info.autoReset === true && this.info.reset();
      const z = p.opaque, D = p.transmissive;
      if (d.setupLights(), P.isArrayCamera) {
        const ee = P.cameras;
        if (D.length > 0) for (let se = 0, de = ee.length; se < de; se++) {
          const _e = ee[se];
          ba(z, D, x, _e);
        }
        nt && be.render(x);
        for (let se = 0, de = ee.length; se < de; se++) {
          const _e = ee[se];
          ya(p, x, _e, _e.viewport);
        }
      } else D.length > 0 && ba(z, D, x, P), nt && be.render(x), ya(p, x, P);
      I !== null && w === 0 && (E.updateMultisampleRenderTarget(I), E.updateRenderTargetMipmap(I)), x.isScene === true && x.onAfterRender(y, x, P), Je.resetDefaultState(), M = -1, S = null, b.pop(), b.length > 0 ? (d = b[b.length - 1], ne === true && te.setGlobalState(y.clippingPlanes, d.state.camera)) : d = null, A.pop(), A.length > 0 ? p = A[A.length - 1] : p = null;
    };
    function Fr(x, P, O, z) {
      if (x.visible === false) return;
      if (x.layers.test(P.layers)) {
        if (x.isGroup) O = x.renderOrder;
        else if (x.isLOD) x.autoUpdate === true && x.update(P);
        else if (x.isLight) d.pushLight(x), x.castShadow && d.pushShadow(x);
        else if (x.isSprite) {
          if (!x.frustumCulled || X.intersectsSprite(x)) {
            z && Ae.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Te);
            const se = G.update(x), de = x.material;
            de.visible && p.push(x, se, de, O, Ae.z, null);
          }
        } else if ((x.isMesh || x.isLine || x.isPoints) && (!x.frustumCulled || X.intersectsObject(x))) {
          const se = G.update(x), de = x.material;
          if (z && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(), Ae.copy(x.boundingSphere.center)) : (se.boundingSphere === null && se.computeBoundingSphere(), Ae.copy(se.boundingSphere.center)), Ae.applyMatrix4(x.matrixWorld).applyMatrix4(Te)), Array.isArray(de)) {
            const _e = se.groups;
            for (let Re = 0, Ce = _e.length; Re < Ce; Re++) {
              const Ee = _e[Re], ke = de[Ee.materialIndex];
              ke && ke.visible && p.push(x, se, ke, O, Ae.z, Ee);
            }
          } else de.visible && p.push(x, se, de, O, Ae.z, null);
        }
      }
      const ee = x.children;
      for (let se = 0, de = ee.length; se < de; se++) Fr(ee[se], P, O, z);
    }
    function ya(x, P, O, z) {
      const D = x.opaque, ee = x.transmissive, se = x.transparent;
      d.setupLightsView(O), ne === true && te.setGlobalState(y.clippingPlanes, O), z && Me.viewport(R.copy(z)), D.length > 0 && Wi(D, P, O), ee.length > 0 && Wi(ee, P, O), se.length > 0 && Wi(se, P, O), Me.buffers.depth.setTest(true), Me.buffers.depth.setMask(true), Me.buffers.color.setMask(true), Me.setPolygonOffset(false);
    }
    function ba(x, P, O, z) {
      if ((O.isScene === true ? O.overrideMaterial : null) !== null) return;
      d.state.transmissionRenderTarget[z.id] === void 0 && (d.state.transmissionRenderTarget[z.id] = new Vn(1, 1, { generateMipmaps: true, type: Oe.has("EXT_color_buffer_half_float") || Oe.has("EXT_color_buffer_float") ? Hi : cn, minFilter: Hn, samples: 4, stencilBuffer: s, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: Ge.workingColorSpace }));
      const ee = d.state.transmissionRenderTarget[z.id], se = z.viewport || R;
      ee.setSize(se.z * y.transmissionResolutionScale, se.w * y.transmissionResolutionScale);
      const de = y.getRenderTarget();
      y.setRenderTarget(ee), y.getClearColor(Z), j = y.getClearAlpha(), j < 1 && y.setClearColor(16777215, 0.5), y.clear(), nt && be.render(O);
      const _e = y.toneMapping;
      y.toneMapping = Sn;
      const Re = z.viewport;
      if (z.viewport !== void 0 && (z.viewport = void 0), d.setupLightsView(z), ne === true && te.setGlobalState(y.clippingPlanes, z), Wi(x, O, z), E.updateMultisampleRenderTarget(ee), E.updateRenderTargetMipmap(ee), Oe.has("WEBGL_multisampled_render_to_texture") === false) {
        let Ce = false;
        for (let Ee = 0, ke = P.length; Ee < ke; Ee++) {
          const qe = P[Ee], lt = qe.object, rt = qe.geometry, Ve = qe.material, ye = qe.group;
          if (Ve.side === sn && lt.layers.test(z.layers)) {
            const pt = Ve.side;
            Ve.side = yt, Ve.needsUpdate = true, Ta(lt, O, z, rt, Ve, ye), Ve.side = pt, Ve.needsUpdate = true, Ce = true;
          }
        }
        Ce === true && (E.updateMultisampleRenderTarget(ee), E.updateRenderTargetMipmap(ee));
      }
      y.setRenderTarget(de), y.setClearColor(Z, j), Re !== void 0 && (z.viewport = Re), y.toneMapping = _e;
    }
    function Wi(x, P, O) {
      const z = P.isScene === true ? P.overrideMaterial : null;
      for (let D = 0, ee = x.length; D < ee; D++) {
        const se = x[D], de = se.object, _e = se.geometry, Re = z === null ? se.material : z, Ce = se.group;
        de.layers.test(O.layers) && Ta(de, P, O, _e, Re, Ce);
      }
    }
    function Ta(x, P, O, z, D, ee) {
      x.onBeforeRender(y, P, O, z, D, ee), x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), D.onBeforeRender(y, P, O, z, x, ee), D.transparent === true && D.side === sn && D.forceSinglePass === false ? (D.side = yt, D.needsUpdate = true, y.renderBufferDirect(O, P, z, D, x, ee), D.side = Mn, D.needsUpdate = true, y.renderBufferDirect(O, P, z, D, x, ee), D.side = sn) : y.renderBufferDirect(O, P, z, D, x, ee), x.onAfterRender(y, P, O, z, D, ee);
    }
    function Xi(x, P, O) {
      P.isScene !== true && (P = st);
      const z = xe.get(x), D = d.state.lights, ee = d.state.shadowsArray, se = D.state.version, de = ve.getParameters(x, D.state, ee, P, O), _e = ve.getProgramCacheKey(de);
      let Re = z.programs;
      z.environment = x.isMeshStandardMaterial ? P.environment : null, z.fog = P.fog, z.envMap = (x.isMeshStandardMaterial ? N : _).get(x.envMap || z.environment), z.envMapRotation = z.environment !== null && x.envMap === null ? P.environmentRotation : x.envMapRotation, Re === void 0 && (x.addEventListener("dispose", Pe), Re = /* @__PURE__ */ new Map(), z.programs = Re);
      let Ce = Re.get(_e);
      if (Ce !== void 0) {
        if (z.currentProgram === Ce && z.lightsStateVersion === se) return wa(x, de), Ce;
      } else de.uniforms = ve.getUniforms(x), x.onBeforeCompile(de, y), Ce = ve.acquireProgram(de, _e), Re.set(_e, Ce), z.uniforms = de.uniforms;
      const Ee = z.uniforms;
      return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === true) && (Ee.clippingPlanes = te.uniform), wa(x, de), z.needsLights = Dl(x), z.lightsStateVersion = se, z.needsLights && (Ee.ambientLightColor.value = D.state.ambient, Ee.lightProbe.value = D.state.probe, Ee.directionalLights.value = D.state.directional, Ee.directionalLightShadows.value = D.state.directionalShadow, Ee.spotLights.value = D.state.spot, Ee.spotLightShadows.value = D.state.spotShadow, Ee.rectAreaLights.value = D.state.rectArea, Ee.ltc_1.value = D.state.rectAreaLTC1, Ee.ltc_2.value = D.state.rectAreaLTC2, Ee.pointLights.value = D.state.point, Ee.pointLightShadows.value = D.state.pointShadow, Ee.hemisphereLights.value = D.state.hemi, Ee.directionalShadowMap.value = D.state.directionalShadowMap, Ee.directionalShadowMatrix.value = D.state.directionalShadowMatrix, Ee.spotShadowMap.value = D.state.spotShadowMap, Ee.spotLightMatrix.value = D.state.spotLightMatrix, Ee.spotLightMap.value = D.state.spotLightMap, Ee.pointShadowMap.value = D.state.pointShadowMap, Ee.pointShadowMatrix.value = D.state.pointShadowMatrix), z.currentProgram = Ce, z.uniformsList = null, Ce;
    }
    function Aa(x) {
      if (x.uniformsList === null) {
        const P = x.currentProgram.getUniforms();
        x.uniformsList = yr.seqWithValue(P.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function wa(x, P) {
      const O = xe.get(x);
      O.outputColorSpace = P.outputColorSpace, O.batching = P.batching, O.batchingColor = P.batchingColor, O.instancing = P.instancing, O.instancingColor = P.instancingColor, O.instancingMorph = P.instancingMorph, O.skinning = P.skinning, O.morphTargets = P.morphTargets, O.morphNormals = P.morphNormals, O.morphColors = P.morphColors, O.morphTargetsCount = P.morphTargetsCount, O.numClippingPlanes = P.numClippingPlanes, O.numIntersection = P.numClipIntersection, O.vertexAlphas = P.vertexAlphas, O.vertexTangents = P.vertexTangents, O.toneMapping = P.toneMapping;
    }
    function Pl(x, P, O, z, D) {
      P.isScene !== true && (P = st), E.resetTextureUnits();
      const ee = P.fog, se = z.isMeshStandardMaterial ? P.environment : null, de = I === null ? y.outputColorSpace : I.isXRRenderTarget === true ? I.texture.colorSpace : vi, _e = (z.isMeshStandardMaterial ? N : _).get(z.envMap || se), Re = z.vertexColors === true && !!O.attributes.color && O.attributes.color.itemSize === 4, Ce = !!O.attributes.tangent && (!!z.normalMap || z.anisotropy > 0), Ee = !!O.morphAttributes.position, ke = !!O.morphAttributes.normal, qe = !!O.morphAttributes.color;
      let lt = Sn;
      z.toneMapped && (I === null || I.isXRRenderTarget === true) && (lt = y.toneMapping);
      const rt = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, Ve = rt !== void 0 ? rt.length : 0, ye = xe.get(z), pt = d.state.lights;
      if (ne === true && (ge === true || x !== S)) {
        const vt = x === S && z.id === M;
        te.setState(z, x, vt);
      }
      let Ye = false;
      z.version === ye.__version ? (ye.needsLights && ye.lightsStateVersion !== pt.state.version || ye.outputColorSpace !== de || D.isBatchedMesh && ye.batching === false || !D.isBatchedMesh && ye.batching === true || D.isBatchedMesh && ye.batchingColor === true && D.colorTexture === null || D.isBatchedMesh && ye.batchingColor === false && D.colorTexture !== null || D.isInstancedMesh && ye.instancing === false || !D.isInstancedMesh && ye.instancing === true || D.isSkinnedMesh && ye.skinning === false || !D.isSkinnedMesh && ye.skinning === true || D.isInstancedMesh && ye.instancingColor === true && D.instanceColor === null || D.isInstancedMesh && ye.instancingColor === false && D.instanceColor !== null || D.isInstancedMesh && ye.instancingMorph === true && D.morphTexture === null || D.isInstancedMesh && ye.instancingMorph === false && D.morphTexture !== null || ye.envMap !== _e || z.fog === true && ye.fog !== ee || ye.numClippingPlanes !== void 0 && (ye.numClippingPlanes !== te.numPlanes || ye.numIntersection !== te.numIntersection) || ye.vertexAlphas !== Re || ye.vertexTangents !== Ce || ye.morphTargets !== Ee || ye.morphNormals !== ke || ye.morphColors !== qe || ye.toneMapping !== lt || ye.morphTargetsCount !== Ve) && (Ye = true) : (Ye = true, ye.__version = z.version);
      let Ft = ye.currentProgram;
      Ye === true && (Ft = Xi(z, P, D));
      let Wn = false, At = false, bi = false;
      const tt = Ft.getUniforms(), Pt = ye.uniforms;
      if (Me.useProgram(Ft.program) && (Wn = true, At = true, bi = true), z.id !== M && (M = z.id, At = true), Wn || S !== x) {
        Me.buffers.depth.getReversed() ? (oe.copy(x.projectionMatrix), Ac(oe), wc(oe), tt.setValue(T, "projectionMatrix", oe)) : tt.setValue(T, "projectionMatrix", x.projectionMatrix), tt.setValue(T, "viewMatrix", x.matrixWorldInverse);
        const Mt = tt.map.cameraPosition;
        Mt !== void 0 && Mt.setValue(T, We.setFromMatrixPosition(x.matrixWorld)), Be.logarithmicDepthBuffer && tt.setValue(T, "logDepthBufFC", 2 / (Math.log(x.far + 1) / Math.LN2)), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && tt.setValue(T, "isOrthographic", x.isOrthographicCamera === true), S !== x && (S = x, At = true, bi = true);
      }
      if (D.isSkinnedMesh) {
        tt.setOptional(T, D, "bindMatrix"), tt.setOptional(T, D, "bindMatrixInverse");
        const vt = D.skeleton;
        vt && (vt.boneTexture === null && vt.computeBoneTexture(), tt.setValue(T, "boneTexture", vt.boneTexture, E));
      }
      D.isBatchedMesh && (tt.setOptional(T, D, "batchingTexture"), tt.setValue(T, "batchingTexture", D._matricesTexture, E), tt.setOptional(T, D, "batchingIdTexture"), tt.setValue(T, "batchingIdTexture", D._indirectTexture, E), tt.setOptional(T, D, "batchingColorTexture"), D._colorsTexture !== null && tt.setValue(T, "batchingColorTexture", D._colorsTexture, E));
      const Lt = O.morphAttributes;
      if ((Lt.position !== void 0 || Lt.normal !== void 0 || Lt.color !== void 0) && we.update(D, O, Ft), (At || ye.receiveShadow !== D.receiveShadow) && (ye.receiveShadow = D.receiveShadow, tt.setValue(T, "receiveShadow", D.receiveShadow)), z.isMeshGouraudMaterial && z.envMap !== null && (Pt.envMap.value = _e, Pt.flipEnvMap.value = _e.isCubeTexture && _e.isRenderTargetTexture === false ? -1 : 1), z.isMeshStandardMaterial && z.envMap === null && P.environment !== null && (Pt.envMapIntensity.value = P.environmentIntensity), At && (tt.setValue(T, "toneMappingExposure", y.toneMappingExposure), ye.needsLights && Ll(Pt, bi), ee && z.fog === true && le.refreshFogUniforms(Pt, ee), le.refreshMaterialUniforms(Pt, z, V, Q, d.state.transmissionRenderTarget[x.id]), yr.upload(T, Aa(ye), Pt, E)), z.isShaderMaterial && z.uniformsNeedUpdate === true && (yr.upload(T, Aa(ye), Pt, E), z.uniformsNeedUpdate = false), z.isSpriteMaterial && tt.setValue(T, "center", D.center), tt.setValue(T, "modelViewMatrix", D.modelViewMatrix), tt.setValue(T, "normalMatrix", D.normalMatrix), tt.setValue(T, "modelMatrix", D.matrixWorld), z.isShaderMaterial || z.isRawShaderMaterial) {
        const vt = z.uniformsGroups;
        for (let Mt = 0, Or = vt.length; Mt < Or; Mt++) {
          const Rn = vt[Mt];
          C.update(Rn, Ft), C.bind(Rn, Ft);
        }
      }
      return Ft;
    }
    function Ll(x, P) {
      x.ambientLightColor.needsUpdate = P, x.lightProbe.needsUpdate = P, x.directionalLights.needsUpdate = P, x.directionalLightShadows.needsUpdate = P, x.pointLights.needsUpdate = P, x.pointLightShadows.needsUpdate = P, x.spotLights.needsUpdate = P, x.spotLightShadows.needsUpdate = P, x.rectAreaLights.needsUpdate = P, x.hemisphereLights.needsUpdate = P;
    }
    function Dl(x) {
      return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === true;
    }
    this.getActiveCubeFace = function() {
      return L;
    }, this.getActiveMipmapLevel = function() {
      return w;
    }, this.getRenderTarget = function() {
      return I;
    }, this.setRenderTargetTextures = function(x, P, O) {
      xe.get(x.texture).__webglTexture = P, xe.get(x.depthTexture).__webglTexture = O;
      const z = xe.get(x);
      z.__hasExternalTextures = true, z.__autoAllocateDepthBuffer = O === void 0, z.__autoAllocateDepthBuffer || Oe.has("WEBGL_multisampled_render_to_texture") === true && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), z.__useRenderToTexture = false);
    }, this.setRenderTargetFramebuffer = function(x, P) {
      const O = xe.get(x);
      O.__webglFramebuffer = P, O.__useDefaultFramebuffer = P === void 0;
    };
    const Ul = T.createFramebuffer();
    this.setRenderTarget = function(x, P = 0, O = 0) {
      I = x, L = P, w = O;
      let z = true, D = null, ee = false, se = false;
      if (x) {
        const _e = xe.get(x);
        if (_e.__useDefaultFramebuffer !== void 0) Me.bindFramebuffer(T.FRAMEBUFFER, null), z = false;
        else if (_e.__webglFramebuffer === void 0) E.setupRenderTarget(x);
        else if (_e.__hasExternalTextures) E.rebindTextures(x, xe.get(x.texture).__webglTexture, xe.get(x.depthTexture).__webglTexture);
        else if (x.depthBuffer) {
          const Ee = x.depthTexture;
          if (_e.__boundDepthTexture !== Ee) {
            if (Ee !== null && xe.has(Ee) && (x.width !== Ee.image.width || x.height !== Ee.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            E.setupDepthRenderbuffer(x);
          }
        }
        const Re = x.texture;
        (Re.isData3DTexture || Re.isDataArrayTexture || Re.isCompressedArrayTexture) && (se = true);
        const Ce = xe.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget ? (Array.isArray(Ce[P]) ? D = Ce[P][O] : D = Ce[P], ee = true) : x.samples > 0 && E.useMultisampledRTT(x) === false ? D = xe.get(x).__webglMultisampledFramebuffer : Array.isArray(Ce) ? D = Ce[O] : D = Ce, R.copy(x.viewport), W.copy(x.scissor), H = x.scissorTest;
      } else R.copy(Se).multiplyScalar(V).floor(), W.copy(Ie).multiplyScalar(V).floor(), H = je;
      if (O !== 0 && (D = Ul), Me.bindFramebuffer(T.FRAMEBUFFER, D) && z && Me.drawBuffers(x, D), Me.viewport(R), Me.scissor(W), Me.setScissorTest(H), ee) {
        const _e = xe.get(x.texture);
        T.framebufferTexture2D(T.FRAMEBUFFER, T.COLOR_ATTACHMENT0, T.TEXTURE_CUBE_MAP_POSITIVE_X + P, _e.__webglTexture, O);
      } else if (se) {
        const _e = xe.get(x.texture), Re = P;
        T.framebufferTextureLayer(T.FRAMEBUFFER, T.COLOR_ATTACHMENT0, _e.__webglTexture, O, Re);
      } else if (x !== null && O !== 0) {
        const _e = xe.get(x.texture);
        T.framebufferTexture2D(T.FRAMEBUFFER, T.COLOR_ATTACHMENT0, T.TEXTURE_2D, _e.__webglTexture, O);
      }
      M = -1;
    }, this.readRenderTargetPixels = function(x, P, O, z, D, ee, se) {
      if (!(x && x.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let de = xe.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && se !== void 0 && (de = de[se]), de) {
        Me.bindFramebuffer(T.FRAMEBUFFER, de);
        try {
          const _e = x.texture, Re = _e.format, Ce = _e.type;
          if (!Be.textureFormatReadable(Re)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Be.textureTypeReadable(Ce)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          P >= 0 && P <= x.width - z && O >= 0 && O <= x.height - D && T.readPixels(P, O, z, D, De.convert(Re), De.convert(Ce), ee);
        } finally {
          const _e = I !== null ? xe.get(I).__webglFramebuffer : null;
          Me.bindFramebuffer(T.FRAMEBUFFER, _e);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(x, P, O, z, D, ee, se) {
      if (!(x && x.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let de = xe.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && se !== void 0 && (de = de[se]), de) {
        const _e = x.texture, Re = _e.format, Ce = _e.type;
        if (!Be.textureFormatReadable(Re)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!Be.textureTypeReadable(Ce)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (P >= 0 && P <= x.width - z && O >= 0 && O <= x.height - D) {
          Me.bindFramebuffer(T.FRAMEBUFFER, de);
          const Ee = T.createBuffer();
          T.bindBuffer(T.PIXEL_PACK_BUFFER, Ee), T.bufferData(T.PIXEL_PACK_BUFFER, ee.byteLength, T.STREAM_READ), T.readPixels(P, O, z, D, De.convert(Re), De.convert(Ce), 0);
          const ke = I !== null ? xe.get(I).__webglFramebuffer : null;
          Me.bindFramebuffer(T.FRAMEBUFFER, ke);
          const qe = T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return T.flush(), await Tc(T, qe, 4), T.bindBuffer(T.PIXEL_PACK_BUFFER, Ee), T.getBufferSubData(T.PIXEL_PACK_BUFFER, 0, ee), T.deleteBuffer(Ee), T.deleteSync(qe), ee;
        } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(x, P = null, O = 0) {
      x.isTexture !== true && (si("WebGLRenderer: copyFramebufferToTexture function signature has changed."), P = arguments[0] || null, x = arguments[1]);
      const z = Math.pow(2, -O), D = Math.floor(x.image.width * z), ee = Math.floor(x.image.height * z), se = P !== null ? P.x : 0, de = P !== null ? P.y : 0;
      E.setTexture2D(x, 0), T.copyTexSubImage2D(T.TEXTURE_2D, O, 0, 0, se, de, D, ee), Me.unbindTexture();
    };
    const Il = T.createFramebuffer(), Nl = T.createFramebuffer();
    this.copyTextureToTexture = function(x, P, O = null, z = null, D = 0, ee = null) {
      x.isTexture !== true && (si("WebGLRenderer: copyTextureToTexture function signature has changed."), z = arguments[0] || null, x = arguments[1], P = arguments[2], ee = arguments[3] || 0, O = null), ee === null && (D !== 0 ? (si("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), ee = D, D = 0) : ee = 0);
      let se, de, _e, Re, Ce, Ee, ke, qe, lt;
      const rt = x.isCompressedTexture ? x.mipmaps[ee] : x.image;
      if (O !== null) se = O.max.x - O.min.x, de = O.max.y - O.min.y, _e = O.isBox3 ? O.max.z - O.min.z : 1, Re = O.min.x, Ce = O.min.y, Ee = O.isBox3 ? O.min.z : 0;
      else {
        const Lt = Math.pow(2, -D);
        se = Math.floor(rt.width * Lt), de = Math.floor(rt.height * Lt), x.isDataArrayTexture ? _e = rt.depth : x.isData3DTexture ? _e = Math.floor(rt.depth * Lt) : _e = 1, Re = 0, Ce = 0, Ee = 0;
      }
      z !== null ? (ke = z.x, qe = z.y, lt = z.z) : (ke = 0, qe = 0, lt = 0);
      const Ve = De.convert(P.format), ye = De.convert(P.type);
      let pt;
      P.isData3DTexture ? (E.setTexture3D(P, 0), pt = T.TEXTURE_3D) : P.isDataArrayTexture || P.isCompressedArrayTexture ? (E.setTexture2DArray(P, 0), pt = T.TEXTURE_2D_ARRAY) : (E.setTexture2D(P, 0), pt = T.TEXTURE_2D), T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL, P.flipY), T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL, P.premultiplyAlpha), T.pixelStorei(T.UNPACK_ALIGNMENT, P.unpackAlignment);
      const Ye = T.getParameter(T.UNPACK_ROW_LENGTH), Ft = T.getParameter(T.UNPACK_IMAGE_HEIGHT), Wn = T.getParameter(T.UNPACK_SKIP_PIXELS), At = T.getParameter(T.UNPACK_SKIP_ROWS), bi = T.getParameter(T.UNPACK_SKIP_IMAGES);
      T.pixelStorei(T.UNPACK_ROW_LENGTH, rt.width), T.pixelStorei(T.UNPACK_IMAGE_HEIGHT, rt.height), T.pixelStorei(T.UNPACK_SKIP_PIXELS, Re), T.pixelStorei(T.UNPACK_SKIP_ROWS, Ce), T.pixelStorei(T.UNPACK_SKIP_IMAGES, Ee);
      const tt = x.isDataArrayTexture || x.isData3DTexture, Pt = P.isDataArrayTexture || P.isData3DTexture;
      if (x.isDepthTexture) {
        const Lt = xe.get(x), vt = xe.get(P), Mt = xe.get(Lt.__renderTarget), Or = xe.get(vt.__renderTarget);
        Me.bindFramebuffer(T.READ_FRAMEBUFFER, Mt.__webglFramebuffer), Me.bindFramebuffer(T.DRAW_FRAMEBUFFER, Or.__webglFramebuffer);
        for (let Rn = 0; Rn < _e; Rn++) tt && (T.framebufferTextureLayer(T.READ_FRAMEBUFFER, T.COLOR_ATTACHMENT0, xe.get(x).__webglTexture, D, Ee + Rn), T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER, T.COLOR_ATTACHMENT0, xe.get(P).__webglTexture, ee, lt + Rn)), T.blitFramebuffer(Re, Ce, se, de, ke, qe, se, de, T.DEPTH_BUFFER_BIT, T.NEAREST);
        Me.bindFramebuffer(T.READ_FRAMEBUFFER, null), Me.bindFramebuffer(T.DRAW_FRAMEBUFFER, null);
      } else if (D !== 0 || x.isRenderTargetTexture || xe.has(x)) {
        const Lt = xe.get(x), vt = xe.get(P);
        Me.bindFramebuffer(T.READ_FRAMEBUFFER, Il), Me.bindFramebuffer(T.DRAW_FRAMEBUFFER, Nl);
        for (let Mt = 0; Mt < _e; Mt++) tt ? T.framebufferTextureLayer(T.READ_FRAMEBUFFER, T.COLOR_ATTACHMENT0, Lt.__webglTexture, D, Ee + Mt) : T.framebufferTexture2D(T.READ_FRAMEBUFFER, T.COLOR_ATTACHMENT0, T.TEXTURE_2D, Lt.__webglTexture, D), Pt ? T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER, T.COLOR_ATTACHMENT0, vt.__webglTexture, ee, lt + Mt) : T.framebufferTexture2D(T.DRAW_FRAMEBUFFER, T.COLOR_ATTACHMENT0, T.TEXTURE_2D, vt.__webglTexture, ee), D !== 0 ? T.blitFramebuffer(Re, Ce, se, de, ke, qe, se, de, T.COLOR_BUFFER_BIT, T.NEAREST) : Pt ? T.copyTexSubImage3D(pt, ee, ke, qe, lt + Mt, Re, Ce, se, de) : T.copyTexSubImage2D(pt, ee, ke, qe, Re, Ce, se, de);
        Me.bindFramebuffer(T.READ_FRAMEBUFFER, null), Me.bindFramebuffer(T.DRAW_FRAMEBUFFER, null);
      } else Pt ? x.isDataTexture || x.isData3DTexture ? T.texSubImage3D(pt, ee, ke, qe, lt, se, de, _e, Ve, ye, rt.data) : P.isCompressedArrayTexture ? T.compressedTexSubImage3D(pt, ee, ke, qe, lt, se, de, _e, Ve, rt.data) : T.texSubImage3D(pt, ee, ke, qe, lt, se, de, _e, Ve, ye, rt) : x.isDataTexture ? T.texSubImage2D(T.TEXTURE_2D, ee, ke, qe, se, de, Ve, ye, rt.data) : x.isCompressedTexture ? T.compressedTexSubImage2D(T.TEXTURE_2D, ee, ke, qe, rt.width, rt.height, Ve, rt.data) : T.texSubImage2D(T.TEXTURE_2D, ee, ke, qe, se, de, Ve, ye, rt);
      T.pixelStorei(T.UNPACK_ROW_LENGTH, Ye), T.pixelStorei(T.UNPACK_IMAGE_HEIGHT, Ft), T.pixelStorei(T.UNPACK_SKIP_PIXELS, Wn), T.pixelStorei(T.UNPACK_SKIP_ROWS, At), T.pixelStorei(T.UNPACK_SKIP_IMAGES, bi), ee === 0 && P.generateMipmaps && T.generateMipmap(pt), Me.unbindTexture();
    }, this.copyTextureToTexture3D = function(x, P, O = null, z = null, D = 0) {
      return x.isTexture !== true && (si("WebGLRenderer: copyTextureToTexture3D function signature has changed."), O = arguments[0] || null, z = arguments[1] || null, x = arguments[2], P = arguments[3], D = arguments[4] || 0), si('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(x, P, O, z, D);
    }, this.initRenderTarget = function(x) {
      xe.get(x).__webglFramebuffer === void 0 && E.setupRenderTarget(x);
    }, this.initTexture = function(x) {
      x.isCubeTexture ? E.setTextureCube(x, 0) : x.isData3DTexture ? E.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? E.setTexture2DArray(x, 0) : E.setTexture2D(x, 0), Me.unbindTexture();
    }, this.resetState = function() {
      L = 0, w = 0, I = null, Me.reset(), Je.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return on;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorspace = Ge._getDrawingBufferColorSpace(e), t.unpackColorSpace = Ge._getUnpackColorSpace();
  }
}
var Ni = function() {
  var i3 = 0, e = document.createElement("div");
  e.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", e.addEventListener("click", function(u) {
    u.preventDefault(), n(++i3 % e.children.length);
  }, false);
  function t(u) {
    return e.appendChild(u.dom), u;
  }
  function n(u) {
    for (var h = 0; h < e.children.length; h++) e.children[h].style.display = h === u ? "block" : "none";
    i3 = u;
  }
  var r = (performance || Date).now(), s = r, a = 0, o = t(new Ni.Panel("FPS", "#0ff", "#002")), l = t(new Ni.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory) var c = t(new Ni.Panel("MB", "#f08", "#201"));
  return n(0), { REVISION: 16, dom: e, addPanel: t, showPanel: n, begin: function() {
    r = (performance || Date).now();
  }, end: function() {
    a++;
    var u = (performance || Date).now();
    if (l.update(u - r, 200), u >= s + 1e3 && (o.update(a * 1e3 / (u - s), 100), s = u, a = 0, c)) {
      var h = performance.memory;
      c.update(h.usedJSHeapSize / 1048576, h.jsHeapSizeLimit / 1048576);
    }
    return u;
  }, update: function() {
    r = this.end();
  }, domElement: e, setMode: n };
};
Ni.Panel = function(i3, e, t) {
  var n = 1 / 0, r = 0, s = Math.round, a = s(window.devicePixelRatio || 1), o = 80 * a, l = 48 * a, c = 3 * a, u = 2 * a, h = 3 * a, f = 15 * a, m = 74 * a, g = 30 * a, v = document.createElement("canvas");
  v.width = o, v.height = l, v.style.cssText = "width:80px;height:48px";
  var p = v.getContext("2d");
  return p.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif", p.textBaseline = "top", p.fillStyle = t, p.fillRect(0, 0, o, l), p.fillStyle = e, p.fillText(i3, c, u), p.fillRect(h, f, m, g), p.fillStyle = t, p.globalAlpha = 0.9, p.fillRect(h, f, m, g), { dom: v, update: function(d, A) {
    n = Math.min(n, d), r = Math.max(r, d), p.fillStyle = t, p.globalAlpha = 1, p.fillRect(0, 0, o, f), p.fillStyle = e, p.fillText(s(d) + " " + i3 + " (" + s(n) + "-" + s(r) + ")", c, u), p.drawImage(v, h + a, f, m - a, g, h, f, m - a, g), p.fillRect(h + m - a, f, a, g), p.fillStyle = t, p.globalAlpha = 0.9, p.fillRect(h + m - a, f, a, s((1 - d / A) * g));
  } };
};
function qp(i3) {
  if (!(typeof window > "u")) {
    var e = document.createElement("style");
    return e.setAttribute("type", "text/css"), e.innerHTML = i3, document.head.appendChild(e), i3;
  }
}
function ci(i3, e) {
  var t = i3.__state.conversionName.toString(), n = Math.round(i3.r), r = Math.round(i3.g), s = Math.round(i3.b), a = i3.a, o = Math.round(i3.h), l = i3.s.toFixed(1), c = i3.v.toFixed(1);
  if (e || t === "THREE_CHAR_HEX" || t === "SIX_CHAR_HEX") {
    for (var u = i3.hex.toString(16); u.length < 6; ) u = "0" + u;
    return "#" + u;
  } else {
    if (t === "CSS_RGB") return "rgb(" + n + "," + r + "," + s + ")";
    if (t === "CSS_RGBA") return "rgba(" + n + "," + r + "," + s + "," + a + ")";
    if (t === "HEX") return "0x" + i3.hex.toString(16);
    if (t === "RGB_ARRAY") return "[" + n + "," + r + "," + s + "]";
    if (t === "RGBA_ARRAY") return "[" + n + "," + r + "," + s + "," + a + "]";
    if (t === "RGB_OBJ") return "{r:" + n + ",g:" + r + ",b:" + s + "}";
    if (t === "RGBA_OBJ") return "{r:" + n + ",g:" + r + ",b:" + s + ",a:" + a + "}";
    if (t === "HSV_OBJ") return "{h:" + o + ",s:" + l + ",v:" + c + "}";
    if (t === "HSVA_OBJ") return "{h:" + o + ",s:" + l + ",v:" + c + ",a:" + a + "}";
  }
  return "unknown format";
}
var Ro = Array.prototype.forEach, Li = Array.prototype.slice, q = { BREAK: {}, extend: function(e) {
  return this.each(Li.call(arguments, 1), function(t) {
    var n = this.isObject(t) ? Object.keys(t) : [];
    n.forEach((function(r) {
      this.isUndefined(t[r]) || (e[r] = t[r]);
    }).bind(this));
  }, this), e;
}, defaults: function(e) {
  return this.each(Li.call(arguments, 1), function(t) {
    var n = this.isObject(t) ? Object.keys(t) : [];
    n.forEach((function(r) {
      this.isUndefined(e[r]) && (e[r] = t[r]);
    }).bind(this));
  }, this), e;
}, compose: function() {
  var e = Li.call(arguments);
  return function() {
    for (var t = Li.call(arguments), n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
    return t[0];
  };
}, each: function(e, t, n) {
  if (e) {
    if (Ro && e.forEach && e.forEach === Ro) e.forEach(t, n);
    else if (e.length === e.length + 0) {
      var r = void 0, s = void 0;
      for (r = 0, s = e.length; r < s; r++) if (r in e && t.call(n, e[r], r) === this.BREAK) return;
    } else for (var a in e) if (t.call(n, e[a], a) === this.BREAK) return;
  }
}, defer: function(e) {
  setTimeout(e, 0);
}, debounce: function(e, t, n) {
  var r = void 0;
  return function() {
    var s = this, a = arguments;
    function o() {
      r = null, n || e.apply(s, a);
    }
    var l = n || !r;
    clearTimeout(r), r = setTimeout(o, t), l && e.apply(s, a);
  };
}, toArray: function(e) {
  return e.toArray ? e.toArray() : Li.call(e);
}, isUndefined: function(e) {
  return e === void 0;
}, isNull: function(e) {
  return e === null;
}, isNaN: function(i3) {
  function e(t) {
    return i3.apply(this, arguments);
  }
  return e.toString = function() {
    return i3.toString();
  }, e;
}(function(i3) {
  return isNaN(i3);
}), isArray: Array.isArray || function(i3) {
  return i3.constructor === Array;
}, isObject: function(e) {
  return e === Object(e);
}, isNumber: function(e) {
  return e === e + 0;
}, isString: function(e) {
  return e === e + "";
}, isBoolean: function(e) {
  return e === false || e === true;
}, isFunction: function(e) {
  return e instanceof Function;
} }, Yp = [{ litmus: q.isString, conversions: { THREE_CHAR_HEX: { read: function(e) {
  var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
  return t === null ? false : { space: "HEX", hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString(), 0) };
}, write: ci }, SIX_CHAR_HEX: { read: function(e) {
  var t = e.match(/^#([A-F0-9]{6})$/i);
  return t === null ? false : { space: "HEX", hex: parseInt("0x" + t[1].toString(), 0) };
}, write: ci }, CSS_RGB: { read: function(e) {
  var t = e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
  return t === null ? false : { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]) };
}, write: ci }, CSS_RGBA: { read: function(e) {
  var t = e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
  return t === null ? false : { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]), a: parseFloat(t[4]) };
}, write: ci } } }, { litmus: q.isNumber, conversions: { HEX: { read: function(e) {
  return { space: "HEX", hex: e, conversionName: "HEX" };
}, write: function(e) {
  return e.hex;
} } } }, { litmus: q.isArray, conversions: { RGB_ARRAY: { read: function(e) {
  return e.length !== 3 ? false : { space: "RGB", r: e[0], g: e[1], b: e[2] };
}, write: function(e) {
  return [e.r, e.g, e.b];
} }, RGBA_ARRAY: { read: function(e) {
  return e.length !== 4 ? false : { space: "RGB", r: e[0], g: e[1], b: e[2], a: e[3] };
}, write: function(e) {
  return [e.r, e.g, e.b, e.a];
} } } }, { litmus: q.isObject, conversions: { RGBA_OBJ: { read: function(e) {
  return q.isNumber(e.r) && q.isNumber(e.g) && q.isNumber(e.b) && q.isNumber(e.a) ? { space: "RGB", r: e.r, g: e.g, b: e.b, a: e.a } : false;
}, write: function(e) {
  return { r: e.r, g: e.g, b: e.b, a: e.a };
} }, RGB_OBJ: { read: function(e) {
  return q.isNumber(e.r) && q.isNumber(e.g) && q.isNumber(e.b) ? { space: "RGB", r: e.r, g: e.g, b: e.b } : false;
}, write: function(e) {
  return { r: e.r, g: e.g, b: e.b };
} }, HSVA_OBJ: { read: function(e) {
  return q.isNumber(e.h) && q.isNumber(e.s) && q.isNumber(e.v) && q.isNumber(e.a) ? { space: "HSV", h: e.h, s: e.s, v: e.v, a: e.a } : false;
}, write: function(e) {
  return { h: e.h, s: e.s, v: e.v, a: e.a };
} }, HSV_OBJ: { read: function(e) {
  return q.isNumber(e.h) && q.isNumber(e.s) && q.isNumber(e.v) ? { space: "HSV", h: e.h, s: e.s, v: e.v } : false;
}, write: function(e) {
  return { h: e.h, s: e.s, v: e.v };
} } } }], Di = void 0, _r = void 0, ia = function() {
  _r = false;
  var e = arguments.length > 1 ? q.toArray(arguments) : arguments[0];
  return q.each(Yp, function(t) {
    if (t.litmus(e)) return q.each(t.conversions, function(n, r) {
      if (Di = n.read(e), _r === false && Di !== false) return _r = Di, Di.conversionName = r, Di.conversion = n, q.BREAK;
    }), q.BREAK;
  }), _r;
}, Co = void 0, Cr = { hsv_to_rgb: function(e, t, n) {
  var r = Math.floor(e / 60) % 6, s = e / 60 - Math.floor(e / 60), a = n * (1 - t), o = n * (1 - s * t), l = n * (1 - (1 - s) * t), c = [[n, l, a], [o, n, a], [a, n, l], [a, o, n], [l, a, n], [n, a, o]][r];
  return { r: c[0] * 255, g: c[1] * 255, b: c[2] * 255 };
}, rgb_to_hsv: function(e, t, n) {
  var r = Math.min(e, t, n), s = Math.max(e, t, n), a = s - r, o = void 0, l = void 0;
  if (s !== 0) l = a / s;
  else return { h: NaN, s: 0, v: 0 };
  return e === s ? o = (t - n) / a : t === s ? o = 2 + (n - e) / a : o = 4 + (e - t) / a, o /= 6, o < 0 && (o += 1), { h: o * 360, s: l, v: s / 255 };
}, rgb_to_hex: function(e, t, n) {
  var r = this.hex_with_component(0, 2, e);
  return r = this.hex_with_component(r, 1, t), r = this.hex_with_component(r, 0, n), r;
}, component_from_hex: function(e, t) {
  return e >> t * 8 & 255;
}, hex_with_component: function(e, t, n) {
  return n << (Co = t * 8) | e & ~(255 << Co);
} }, $p = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i3) {
  return typeof i3;
} : function(i3) {
  return i3 && typeof Symbol == "function" && i3.constructor === Symbol && i3 !== Symbol.prototype ? "symbol" : typeof i3;
}, Wt = function(i3, e) {
  if (!(i3 instanceof e)) throw new TypeError("Cannot call a class as a function");
}, Xt = /* @__PURE__ */ function() {
  function i3(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r);
    }
  }
  return function(e, t, n) {
    return t && i3(e.prototype, t), n && i3(e, n), e;
  };
}(), yn = function i(e, t, n) {
  e === null && (e = Function.prototype);
  var r = Object.getOwnPropertyDescriptor(e, t);
  if (r === void 0) {
    var s = Object.getPrototypeOf(e);
    return s === null ? void 0 : i(s, t, n);
  } else {
    if ("value" in r) return r.value;
    var a = r.get;
    return a === void 0 ? void 0 : a.call(n);
  }
}, bn = function(i3, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  i3.prototype = Object.create(e && e.prototype, { constructor: { value: i3, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(i3, e) : i3.__proto__ = e);
}, Tn = function(i3, e) {
  if (!i3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : i3;
}, ft = function() {
  function i3() {
    if (Wt(this, i3), this.__state = ia.apply(this, arguments), this.__state === false) throw new Error("Failed to interpret color arguments");
    this.__state.a = this.__state.a || 1;
  }
  return Xt(i3, [{ key: "toString", value: function() {
    return ci(this);
  } }, { key: "toHexString", value: function() {
    return ci(this, true);
  } }, { key: "toOriginal", value: function() {
    return this.__state.conversion.write(this);
  } }]), i3;
}();
function ga(i3, e, t) {
  Object.defineProperty(i3, e, { get: function() {
    return this.__state.space === "RGB" ? this.__state[e] : (ft.recalculateRGB(this, e, t), this.__state[e]);
  }, set: function(r) {
    this.__state.space !== "RGB" && (ft.recalculateRGB(this, e, t), this.__state.space = "RGB"), this.__state[e] = r;
  } });
}
function va(i3, e) {
  Object.defineProperty(i3, e, { get: function() {
    return this.__state.space === "HSV" ? this.__state[e] : (ft.recalculateHSV(this), this.__state[e]);
  }, set: function(n) {
    this.__state.space !== "HSV" && (ft.recalculateHSV(this), this.__state.space = "HSV"), this.__state[e] = n;
  } });
}
ft.recalculateRGB = function(i3, e, t) {
  if (i3.__state.space === "HEX") i3.__state[e] = Cr.component_from_hex(i3.__state.hex, t);
  else if (i3.__state.space === "HSV") q.extend(i3.__state, Cr.hsv_to_rgb(i3.__state.h, i3.__state.s, i3.__state.v));
  else throw new Error("Corrupted color state");
};
ft.recalculateHSV = function(i3) {
  var e = Cr.rgb_to_hsv(i3.r, i3.g, i3.b);
  q.extend(i3.__state, { s: e.s, v: e.v }), q.isNaN(e.h) ? q.isUndefined(i3.__state.h) && (i3.__state.h = 0) : i3.__state.h = e.h;
};
ft.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"];
ga(ft.prototype, "r", 2);
ga(ft.prototype, "g", 1);
ga(ft.prototype, "b", 0);
va(ft.prototype, "h");
va(ft.prototype, "s");
va(ft.prototype, "v");
Object.defineProperty(ft.prototype, "a", { get: function() {
  return this.__state.a;
}, set: function(e) {
  this.__state.a = e;
} });
Object.defineProperty(ft.prototype, "hex", { get: function() {
  return this.__state.space !== "HEX" && (this.__state.hex = Cr.rgb_to_hex(this.r, this.g, this.b), this.__state.space = "HEX"), this.__state.hex;
}, set: function(e) {
  this.__state.space = "HEX", this.__state.hex = e;
} });
var Gn = function() {
  function i3(e, t) {
    Wt(this, i3), this.initialValue = e[t], this.domElement = document.createElement("div"), this.object = e, this.property = t, this.__onChange = void 0, this.__onFinishChange = void 0;
  }
  return Xt(i3, [{ key: "onChange", value: function(t) {
    return this.__onChange = t, this;
  } }, { key: "onFinishChange", value: function(t) {
    return this.__onFinishChange = t, this;
  } }, { key: "setValue", value: function(t) {
    return this.object[this.property] = t, this.__onChange && this.__onChange.call(this, t), this.updateDisplay(), this;
  } }, { key: "getValue", value: function() {
    return this.object[this.property];
  } }, { key: "updateDisplay", value: function() {
    return this;
  } }, { key: "isModified", value: function() {
    return this.initialValue !== this.getValue();
  } }]), i3;
}(), Kp = { HTMLEvents: ["change"], MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"], KeyboardEvents: ["keydown"] }, Sl = {};
q.each(Kp, function(i3, e) {
  q.each(i3, function(t) {
    Sl[t] = e;
  });
});
var Zp = /(\d+(\.\d+)?)px/;
function qt(i3) {
  if (i3 === "0" || q.isUndefined(i3)) return 0;
  var e = i3.match(Zp);
  return q.isNull(e) ? 0 : parseFloat(e[1]);
}
var F = { makeSelectable: function(e, t) {
  e === void 0 || e.style === void 0 || (e.onselectstart = t ? function() {
    return false;
  } : function() {
  }, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off");
}, makeFullscreen: function(e, t, n) {
  var r = n, s = t;
  q.isUndefined(s) && (s = true), q.isUndefined(r) && (r = true), e.style.position = "absolute", s && (e.style.left = 0, e.style.right = 0), r && (e.style.top = 0, e.style.bottom = 0);
}, fakeEvent: function(e, t, n, r) {
  var s = n || {}, a = Sl[t];
  if (!a) throw new Error("Event type " + t + " not supported.");
  var o = document.createEvent(a);
  switch (a) {
    case "MouseEvents": {
      var l = s.x || s.clientX || 0, c = s.y || s.clientY || 0;
      o.initMouseEvent(t, s.bubbles || false, s.cancelable || true, window, s.clickCount || 1, 0, 0, l, c, false, false, false, false, 0, null);
      break;
    }
    case "KeyboardEvents": {
      var u = o.initKeyboardEvent || o.initKeyEvent;
      q.defaults(s, { cancelable: true, ctrlKey: false, altKey: false, shiftKey: false, metaKey: false, keyCode: void 0, charCode: void 0 }), u(t, s.bubbles || false, s.cancelable, window, s.ctrlKey, s.altKey, s.shiftKey, s.metaKey, s.keyCode, s.charCode);
      break;
    }
    default: {
      o.initEvent(t, s.bubbles || false, s.cancelable || true);
      break;
    }
  }
  q.defaults(o, r), e.dispatchEvent(o);
}, bind: function(e, t, n, r) {
  var s = r || false;
  return e.addEventListener ? e.addEventListener(t, n, s) : e.attachEvent && e.attachEvent("on" + t, n), F;
}, unbind: function(e, t, n, r) {
  var s = r || false;
  return e.removeEventListener ? e.removeEventListener(t, n, s) : e.detachEvent && e.detachEvent("on" + t, n), F;
}, addClass: function(e, t) {
  if (e.className === void 0) e.className = t;
  else if (e.className !== t) {
    var n = e.className.split(/ +/);
    n.indexOf(t) === -1 && (n.push(t), e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""));
  }
  return F;
}, removeClass: function(e, t) {
  if (t) if (e.className === t) e.removeAttribute("class");
  else {
    var n = e.className.split(/ +/), r = n.indexOf(t);
    r !== -1 && (n.splice(r, 1), e.className = n.join(" "));
  }
  else e.className = void 0;
  return F;
}, hasClass: function(e, t) {
  return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || false;
}, getWidth: function(e) {
  var t = getComputedStyle(e);
  return qt(t["border-left-width"]) + qt(t["border-right-width"]) + qt(t["padding-left"]) + qt(t["padding-right"]) + qt(t.width);
}, getHeight: function(e) {
  var t = getComputedStyle(e);
  return qt(t["border-top-width"]) + qt(t["border-bottom-width"]) + qt(t["padding-top"]) + qt(t["padding-bottom"]) + qt(t.height);
}, getOffset: function(e) {
  var t = e, n = { left: 0, top: 0 };
  if (t.offsetParent) do
    n.left += t.offsetLeft, n.top += t.offsetTop, t = t.offsetParent;
  while (t);
  return n;
}, isActive: function(e) {
  return e === document.activeElement && (e.type || e.href);
} }, Ml = function(i3) {
  bn(e, i3);
  function e(t, n) {
    Wt(this, e);
    var r = Tn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), s = r;
    r.__prev = r.getValue(), r.__checkbox = document.createElement("input"), r.__checkbox.setAttribute("type", "checkbox");
    function a() {
      s.setValue(!s.__prev);
    }
    return F.bind(r.__checkbox, "change", a, false), r.domElement.appendChild(r.__checkbox), r.updateDisplay(), r;
  }
  return Xt(e, [{ key: "setValue", value: function(n) {
    var r = yn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, n);
    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), r;
  } }, { key: "updateDisplay", value: function() {
    return this.getValue() === true ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = true, this.__prev = true) : (this.__checkbox.checked = false, this.__prev = false), yn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this);
  } }]), e;
}(Gn), jp = function(i3) {
  bn(e, i3);
  function e(t, n, r) {
    Wt(this, e);
    var s = Tn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), a = r, o = s;
    if (s.__select = document.createElement("select"), q.isArray(a)) {
      var l = {};
      q.each(a, function(c) {
        l[c] = c;
      }), a = l;
    }
    return q.each(a, function(c, u) {
      var h = document.createElement("option");
      h.innerHTML = u, h.setAttribute("value", c), o.__select.appendChild(h);
    }), s.updateDisplay(), F.bind(s.__select, "change", function() {
      var c = this.options[this.selectedIndex].value;
      o.setValue(c);
    }), s.domElement.appendChild(s.__select), s;
  }
  return Xt(e, [{ key: "setValue", value: function(n) {
    var r = yn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, n);
    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), r;
  } }, { key: "updateDisplay", value: function() {
    return F.isActive(this.__select) ? this : (this.__select.value = this.getValue(), yn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this));
  } }]), e;
}(Gn), Jp = function(i3) {
  bn(e, i3);
  function e(t, n) {
    Wt(this, e);
    var r = Tn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), s = r;
    function a() {
      s.setValue(s.__input.value);
    }
    function o() {
      s.__onFinishChange && s.__onFinishChange.call(s, s.getValue());
    }
    return r.__input = document.createElement("input"), r.__input.setAttribute("type", "text"), F.bind(r.__input, "keyup", a), F.bind(r.__input, "change", a), F.bind(r.__input, "blur", o), F.bind(r.__input, "keydown", function(l) {
      l.keyCode === 13 && this.blur();
    }), r.updateDisplay(), r.domElement.appendChild(r.__input), r;
  }
  return Xt(e, [{ key: "updateDisplay", value: function() {
    return F.isActive(this.__input) || (this.__input.value = this.getValue()), yn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this);
  } }]), e;
}(Gn);
function Po(i3) {
  var e = i3.toString();
  return e.indexOf(".") > -1 ? e.length - e.indexOf(".") - 1 : 0;
}
var El = function(i3) {
  bn(e, i3);
  function e(t, n, r) {
    Wt(this, e);
    var s = Tn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), a = r || {};
    return s.__min = a.min, s.__max = a.max, s.__step = a.step, q.isUndefined(s.__step) ? s.initialValue === 0 ? s.__impliedStep = 1 : s.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(s.initialValue)) / Math.LN10)) / 10 : s.__impliedStep = s.__step, s.__precision = Po(s.__impliedStep), s;
  }
  return Xt(e, [{ key: "setValue", value: function(n) {
    var r = n;
    return this.__min !== void 0 && r < this.__min ? r = this.__min : this.__max !== void 0 && r > this.__max && (r = this.__max), this.__step !== void 0 && r % this.__step !== 0 && (r = Math.round(r / this.__step) * this.__step), yn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, r);
  } }, { key: "min", value: function(n) {
    return this.__min = n, this;
  } }, { key: "max", value: function(n) {
    return this.__max = n, this;
  } }, { key: "step", value: function(n) {
    return this.__step = n, this.__impliedStep = n, this.__precision = Po(n), this;
  } }]), e;
}(Gn);
function Qp(i3, e) {
  var t = Math.pow(10, e);
  return Math.round(i3 * t) / t;
}
var Pr = function(i3) {
  bn(e, i3);
  function e(t, n, r) {
    Wt(this, e);
    var s = Tn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, r));
    s.__truncationSuspended = false;
    var a = s, o = void 0;
    function l() {
      var g = parseFloat(a.__input.value);
      q.isNaN(g) || a.setValue(g);
    }
    function c() {
      a.__onFinishChange && a.__onFinishChange.call(a, a.getValue());
    }
    function u() {
      c();
    }
    function h(g) {
      var v = o - g.clientY;
      a.setValue(a.getValue() + v * a.__impliedStep), o = g.clientY;
    }
    function f() {
      F.unbind(window, "mousemove", h), F.unbind(window, "mouseup", f), c();
    }
    function m(g) {
      F.bind(window, "mousemove", h), F.bind(window, "mouseup", f), o = g.clientY;
    }
    return s.__input = document.createElement("input"), s.__input.setAttribute("type", "text"), F.bind(s.__input, "change", l), F.bind(s.__input, "blur", u), F.bind(s.__input, "mousedown", m), F.bind(s.__input, "keydown", function(g) {
      g.keyCode === 13 && (a.__truncationSuspended = true, this.blur(), a.__truncationSuspended = false, c());
    }), s.updateDisplay(), s.domElement.appendChild(s.__input), s;
  }
  return Xt(e, [{ key: "updateDisplay", value: function() {
    return this.__input.value = this.__truncationSuspended ? this.getValue() : Qp(this.getValue(), this.__precision), yn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this);
  } }]), e;
}(El);
function Lo(i3, e, t, n, r) {
  return n + (r - n) * ((i3 - e) / (t - e));
}
var ra = function(i3) {
  bn(e, i3);
  function e(t, n, r, s, a) {
    Wt(this, e);
    var o = Tn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, { min: r, max: s, step: a })), l = o;
    o.__background = document.createElement("div"), o.__foreground = document.createElement("div"), F.bind(o.__background, "mousedown", c), F.bind(o.__background, "touchstart", f), F.addClass(o.__background, "slider"), F.addClass(o.__foreground, "slider-fg");
    function c(v) {
      document.activeElement.blur(), F.bind(window, "mousemove", u), F.bind(window, "mouseup", h), u(v);
    }
    function u(v) {
      v.preventDefault();
      var p = l.__background.getBoundingClientRect();
      return l.setValue(Lo(v.clientX, p.left, p.right, l.__min, l.__max)), false;
    }
    function h() {
      F.unbind(window, "mousemove", u), F.unbind(window, "mouseup", h), l.__onFinishChange && l.__onFinishChange.call(l, l.getValue());
    }
    function f(v) {
      v.touches.length === 1 && (F.bind(window, "touchmove", m), F.bind(window, "touchend", g), m(v));
    }
    function m(v) {
      var p = v.touches[0].clientX, d = l.__background.getBoundingClientRect();
      l.setValue(Lo(p, d.left, d.right, l.__min, l.__max));
    }
    function g() {
      F.unbind(window, "touchmove", m), F.unbind(window, "touchend", g), l.__onFinishChange && l.__onFinishChange.call(l, l.getValue());
    }
    return o.updateDisplay(), o.__background.appendChild(o.__foreground), o.domElement.appendChild(o.__background), o;
  }
  return Xt(e, [{ key: "updateDisplay", value: function() {
    var n = (this.getValue() - this.__min) / (this.__max - this.__min);
    return this.__foreground.style.width = n * 100 + "%", yn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this);
  } }]), e;
}(El), yl = function(i3) {
  bn(e, i3);
  function e(t, n, r) {
    Wt(this, e);
    var s = Tn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), a = s;
    return s.__button = document.createElement("div"), s.__button.innerHTML = r === void 0 ? "Fire" : r, F.bind(s.__button, "click", function(o) {
      return o.preventDefault(), a.fire(), false;
    }), F.addClass(s.__button, "button"), s.domElement.appendChild(s.__button), s;
  }
  return Xt(e, [{ key: "fire", value: function() {
    this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue());
  } }]), e;
}(Gn), sa = function(i3) {
  bn(e, i3);
  function e(t, n) {
    Wt(this, e);
    var r = Tn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
    r.__color = new ft(r.getValue()), r.__temp = new ft(0);
    var s = r;
    r.domElement = document.createElement("div"), F.makeSelectable(r.domElement, false), r.__selector = document.createElement("div"), r.__selector.className = "selector", r.__saturation_field = document.createElement("div"), r.__saturation_field.className = "saturation-field", r.__field_knob = document.createElement("div"), r.__field_knob.className = "field-knob", r.__field_knob_border = "2px solid ", r.__hue_knob = document.createElement("div"), r.__hue_knob.className = "hue-knob", r.__hue_field = document.createElement("div"), r.__hue_field.className = "hue-field", r.__input = document.createElement("input"), r.__input.type = "text", r.__input_textShadow = "0 1px 1px ", F.bind(r.__input, "keydown", function(v) {
      v.keyCode === 13 && h.call(this);
    }), F.bind(r.__input, "blur", h), F.bind(r.__selector, "mousedown", function() {
      F.addClass(this, "drag").bind(window, "mouseup", function() {
        F.removeClass(s.__selector, "drag");
      });
    }), F.bind(r.__selector, "touchstart", function() {
      F.addClass(this, "drag").bind(window, "touchend", function() {
        F.removeClass(s.__selector, "drag");
      });
    });
    var a = document.createElement("div");
    q.extend(r.__selector.style, { width: "122px", height: "102px", padding: "3px", backgroundColor: "#222", boxShadow: "0px 1px 3px rgba(0,0,0,0.3)" }), q.extend(r.__field_knob.style, { position: "absolute", width: "12px", height: "12px", border: r.__field_knob_border + (r.__color.v < 0.5 ? "#fff" : "#000"), boxShadow: "0px 1px 3px rgba(0,0,0,0.5)", borderRadius: "12px", zIndex: 1 }), q.extend(r.__hue_knob.style, { position: "absolute", width: "15px", height: "2px", borderRight: "4px solid #fff", zIndex: 1 }), q.extend(r.__saturation_field.style, { width: "100px", height: "100px", border: "1px solid #555", marginRight: "3px", display: "inline-block", cursor: "pointer" }), q.extend(a.style, { width: "100%", height: "100%", background: "none" }), Do(a, "top", "rgba(0,0,0,0)", "#000"), q.extend(r.__hue_field.style, { width: "15px", height: "100px", border: "1px solid #555", cursor: "ns-resize", position: "absolute", top: "3px", right: "3px" }), tm(r.__hue_field), q.extend(r.__input.style, { outline: "none", textAlign: "center", color: "#fff", border: 0, fontWeight: "bold", textShadow: r.__input_textShadow + "rgba(0,0,0,0.7)" }), F.bind(r.__saturation_field, "mousedown", o), F.bind(r.__saturation_field, "touchstart", o), F.bind(r.__field_knob, "mousedown", o), F.bind(r.__field_knob, "touchstart", o), F.bind(r.__hue_field, "mousedown", l), F.bind(r.__hue_field, "touchstart", l);
    function o(v) {
      m(v), F.bind(window, "mousemove", m), F.bind(window, "touchmove", m), F.bind(window, "mouseup", c), F.bind(window, "touchend", c);
    }
    function l(v) {
      g(v), F.bind(window, "mousemove", g), F.bind(window, "touchmove", g), F.bind(window, "mouseup", u), F.bind(window, "touchend", u);
    }
    function c() {
      F.unbind(window, "mousemove", m), F.unbind(window, "touchmove", m), F.unbind(window, "mouseup", c), F.unbind(window, "touchend", c), f();
    }
    function u() {
      F.unbind(window, "mousemove", g), F.unbind(window, "touchmove", g), F.unbind(window, "mouseup", u), F.unbind(window, "touchend", u), f();
    }
    function h() {
      var v = ia(this.value);
      v !== false ? (s.__color.__state = v, s.setValue(s.__color.toOriginal())) : this.value = s.__color.toString();
    }
    function f() {
      s.__onFinishChange && s.__onFinishChange.call(s, s.__color.toOriginal());
    }
    r.__saturation_field.appendChild(a), r.__selector.appendChild(r.__field_knob), r.__selector.appendChild(r.__saturation_field), r.__selector.appendChild(r.__hue_field), r.__hue_field.appendChild(r.__hue_knob), r.domElement.appendChild(r.__input), r.domElement.appendChild(r.__selector), r.updateDisplay();
    function m(v) {
      v.type.indexOf("touch") === -1 && v.preventDefault();
      var p = s.__saturation_field.getBoundingClientRect(), d = v.touches && v.touches[0] || v, A = d.clientX, b = d.clientY, y = (A - p.left) / (p.right - p.left), U = 1 - (b - p.top) / (p.bottom - p.top);
      return U > 1 ? U = 1 : U < 0 && (U = 0), y > 1 ? y = 1 : y < 0 && (y = 0), s.__color.v = U, s.__color.s = y, s.setValue(s.__color.toOriginal()), false;
    }
    function g(v) {
      v.type.indexOf("touch") === -1 && v.preventDefault();
      var p = s.__hue_field.getBoundingClientRect(), d = v.touches && v.touches[0] || v, A = d.clientY, b = 1 - (A - p.top) / (p.bottom - p.top);
      return b > 1 ? b = 1 : b < 0 && (b = 0), s.__color.h = b * 360, s.setValue(s.__color.toOriginal()), false;
    }
    return r;
  }
  return Xt(e, [{ key: "updateDisplay", value: function() {
    var n = ia(this.getValue());
    if (n !== false) {
      var r = false;
      q.each(ft.COMPONENTS, function(o) {
        if (!q.isUndefined(n[o]) && !q.isUndefined(this.__color.__state[o]) && n[o] !== this.__color.__state[o]) return r = true, {};
      }, this), r && q.extend(this.__color.__state, n);
    }
    q.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
    var s = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0, a = 255 - s;
    q.extend(this.__field_knob.style, { marginLeft: 100 * this.__color.s - 7 + "px", marginTop: 100 * (1 - this.__color.v) - 7 + "px", backgroundColor: this.__temp.toHexString(), border: this.__field_knob_border + "rgb(" + s + "," + s + "," + s + ")" }), this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + "px", this.__temp.s = 1, this.__temp.v = 1, Do(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), q.extend(this.__input.style, { backgroundColor: this.__color.toHexString(), color: "rgb(" + s + "," + s + "," + s + ")", textShadow: this.__input_textShadow + "rgba(" + a + "," + a + "," + a + ",.7)" });
  } }]), e;
}(Gn), em = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
function Do(i3, e, t, n) {
  i3.style.background = "", q.each(em, function(r) {
    i3.style.cssText += "background: " + r + "linear-gradient(" + e + ", " + t + " 0%, " + n + " 100%); ";
  });
}
function tm(i3) {
  i3.style.background = "", i3.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", i3.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", i3.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", i3.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", i3.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
}
var nm = { load: function(e, t) {
  var n = t || document, r = n.createElement("link");
  r.type = "text/css", r.rel = "stylesheet", r.href = e, n.getElementsByTagName("head")[0].appendChild(r);
}, inject: function(e, t) {
  var n = t || document, r = document.createElement("style");
  r.type = "text/css", r.innerHTML = e;
  var s = n.getElementsByTagName("head")[0];
  try {
    s.appendChild(r);
  } catch {
  }
} }, im = `<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`, rm = function(e, t) {
  var n = e[t];
  return q.isArray(arguments[2]) || q.isObject(arguments[2]) ? new jp(e, t, arguments[2]) : q.isNumber(n) ? q.isNumber(arguments[2]) && q.isNumber(arguments[3]) ? q.isNumber(arguments[4]) ? new ra(e, t, arguments[2], arguments[3], arguments[4]) : new ra(e, t, arguments[2], arguments[3]) : q.isNumber(arguments[4]) ? new Pr(e, t, { min: arguments[2], max: arguments[3], step: arguments[4] }) : new Pr(e, t, { min: arguments[2], max: arguments[3] }) : q.isString(n) ? new Jp(e, t) : q.isFunction(n) ? new yl(e, t, "") : q.isBoolean(n) ? new Ml(e, t) : null;
};
function sm(i3) {
  setTimeout(i3, 1e3 / 60);
}
var am = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || sm, om = function() {
  function i3() {
    Wt(this, i3), this.backgroundElement = document.createElement("div"), q.extend(this.backgroundElement.style, { backgroundColor: "rgba(0,0,0,0.8)", top: 0, left: 0, display: "none", zIndex: "1000", opacity: 0, WebkitTransition: "opacity 0.2s linear", transition: "opacity 0.2s linear" }), F.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), q.extend(this.domElement.style, { position: "fixed", display: "none", zIndex: "1001", opacity: 0, WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear", transition: "transform 0.2s ease-out, opacity 0.2s linear" }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
    var e = this;
    F.bind(this.backgroundElement, "click", function() {
      e.hide();
    });
  }
  return Xt(i3, [{ key: "show", value: function() {
    var t = this;
    this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), q.defer(function() {
      t.backgroundElement.style.opacity = 1, t.domElement.style.opacity = 1, t.domElement.style.webkitTransform = "scale(1)";
    });
  } }, { key: "hide", value: function() {
    var t = this, n = function r() {
      t.domElement.style.display = "none", t.backgroundElement.style.display = "none", F.unbind(t.domElement, "webkitTransitionEnd", r), F.unbind(t.domElement, "transitionend", r), F.unbind(t.domElement, "oTransitionEnd", r);
    };
    F.bind(this.domElement, "webkitTransitionEnd", n), F.bind(this.domElement, "transitionend", n), F.bind(this.domElement, "oTransitionEnd", n), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)";
  } }, { key: "layout", value: function() {
    this.domElement.style.left = window.innerWidth / 2 - F.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - F.getHeight(this.domElement) / 2 + "px";
  } }]), i3;
}(), lm = qp(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);
nm.inject(lm);
var Uo = "dg", Io = 72, No = 20, zi = "Default", Ii = function() {
  try {
    return !!window.localStorage;
  } catch {
    return false;
  }
}(), Fi = void 0, Fo = true, ai = void 0, ms = false, bl = [], Qe = function i2(e) {
  var t = this, n = e || {};
  this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), F.addClass(this.domElement, Uo), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], n = q.defaults(n, { closeOnTop: false, autoPlace: true, width: i2.DEFAULT_WIDTH }), n = q.defaults(n, { resizable: n.autoPlace, hideable: n.autoPlace }), q.isUndefined(n.load) ? n.load = { preset: zi } : n.preset && (n.load.preset = n.preset), q.isUndefined(n.parent) && n.hideable && bl.push(this), n.resizable = q.isUndefined(n.parent) && n.resizable, n.autoPlace && q.isUndefined(n.scrollable) && (n.scrollable = true);
  var r = Ii && localStorage.getItem(oi(this, "isLocal")) === "true", s = void 0, a = void 0;
  if (Object.defineProperties(this, { parent: { get: function() {
    return n.parent;
  } }, scrollable: { get: function() {
    return n.scrollable;
  } }, autoPlace: { get: function() {
    return n.autoPlace;
  } }, closeOnTop: { get: function() {
    return n.closeOnTop;
  } }, preset: { get: function() {
    return t.parent ? t.getRoot().preset : n.load.preset;
  }, set: function(f) {
    t.parent ? t.getRoot().preset = f : n.load.preset = f, hm(this), t.revert();
  } }, width: { get: function() {
    return n.width;
  }, set: function(f) {
    n.width = f, la(t, f);
  } }, name: { get: function() {
    return n.name;
  }, set: function(f) {
    n.name = f, a && (a.innerHTML = n.name);
  } }, closed: { get: function() {
    return n.closed;
  }, set: function(f) {
    n.closed = f, n.closed ? F.addClass(t.__ul, i2.CLASS_CLOSED) : F.removeClass(t.__ul, i2.CLASS_CLOSED), this.onResize(), t.__closeButton && (t.__closeButton.innerHTML = f ? i2.TEXT_OPEN : i2.TEXT_CLOSED);
  } }, load: { get: function() {
    return n.load;
  } }, useLocalStorage: { get: function() {
    return r;
  }, set: function(f) {
    Ii && (r = f, f ? F.bind(window, "unload", s) : F.unbind(window, "unload", s), localStorage.setItem(oi(t, "isLocal"), f));
  } } }), q.isUndefined(n.parent)) {
    if (this.closed = n.closed || false, F.addClass(this.domElement, i2.CLASS_MAIN), F.makeSelectable(this.domElement, false), Ii && r) {
      t.useLocalStorage = true;
      var o = localStorage.getItem(oi(this, "gui"));
      o && (n.load = JSON.parse(o));
    }
    this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = i2.TEXT_CLOSED, F.addClass(this.__closeButton, i2.CLASS_CLOSE_BUTTON), n.closeOnTop ? (F.addClass(this.__closeButton, i2.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (F.addClass(this.__closeButton, i2.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), F.bind(this.__closeButton, "click", function() {
      t.closed = !t.closed;
    });
  } else {
    n.closed === void 0 && (n.closed = true);
    var l = document.createTextNode(n.name);
    F.addClass(l, "controller-name"), a = xa(t, l);
    var c = function(f) {
      return f.preventDefault(), t.closed = !t.closed, false;
    };
    F.addClass(this.__ul, i2.CLASS_CLOSED), F.addClass(a, "title"), F.bind(a, "click", c), n.closed || (this.closed = false);
  }
  n.autoPlace && (q.isUndefined(n.parent) && (Fo && (ai = document.createElement("div"), F.addClass(ai, Uo), F.addClass(ai, i2.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(ai), Fo = false), ai.appendChild(this.domElement), F.addClass(this.domElement, i2.CLASS_AUTO_PLACE)), this.parent || la(t, n.width)), this.__resizeHandler = function() {
    t.onResizeDebounced();
  }, F.bind(window, "resize", this.__resizeHandler), F.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), F.bind(this.__ul, "transitionend", this.__resizeHandler), F.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), n.resizable && dm(this), s = function() {
    Ii && localStorage.getItem(oi(t, "isLocal")) === "true" && localStorage.setItem(oi(t, "gui"), JSON.stringify(t.getSaveObject()));
  }, this.saveToLocalStorageIfPossible = s;
  function u() {
    var h = t.getRoot();
    h.width += 1, q.defer(function() {
      h.width -= 1;
    });
  }
  n.parent || u();
};
Qe.toggleHide = function() {
  ms = !ms, q.each(bl, function(i3) {
    i3.domElement.style.display = ms ? "none" : "";
  });
};
Qe.CLASS_AUTO_PLACE = "a";
Qe.CLASS_AUTO_PLACE_CONTAINER = "ac";
Qe.CLASS_MAIN = "main";
Qe.CLASS_CONTROLLER_ROW = "cr";
Qe.CLASS_TOO_TALL = "taller-than-window";
Qe.CLASS_CLOSED = "closed";
Qe.CLASS_CLOSE_BUTTON = "close-button";
Qe.CLASS_CLOSE_TOP = "close-top";
Qe.CLASS_CLOSE_BOTTOM = "close-bottom";
Qe.CLASS_DRAG = "drag";
Qe.DEFAULT_WIDTH = 245;
Qe.TEXT_CLOSED = "Close Controls";
Qe.TEXT_OPEN = "Open Controls";
Qe._keydownHandler = function(i3) {
  document.activeElement.type !== "text" && (i3.which === Io || i3.keyCode === Io) && Qe.toggleHide();
};
F.bind(window, "keydown", Qe._keydownHandler, false);
q.extend(Qe.prototype, { add: function(e, t) {
  return Oi(this, e, t, { factoryArgs: Array.prototype.slice.call(arguments, 2) });
}, addColor: function(e, t) {
  return Oi(this, e, t, { color: true });
}, remove: function(e) {
  this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(e), 1);
  var t = this;
  q.defer(function() {
    t.onResize();
  });
}, destroy: function() {
  if (this.parent) throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");
  this.autoPlace && ai.removeChild(this.domElement);
  var e = this;
  q.each(this.__folders, function(t) {
    e.removeFolder(t);
  }), F.unbind(window, "keydown", Qe._keydownHandler, false), Oo(this);
}, addFolder: function(e) {
  if (this.__folders[e] !== void 0) throw new Error('You already have a folder in this GUI by the name "' + e + '"');
  var t = { name: e, parent: this };
  t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]);
  var n = new Qe(t);
  this.__folders[e] = n;
  var r = xa(this, n.domElement);
  return F.addClass(r, "folder"), n;
}, removeFolder: function(e) {
  this.__ul.removeChild(e.domElement.parentElement), delete this.__folders[e.name], this.load && this.load.folders && this.load.folders[e.name] && delete this.load.folders[e.name], Oo(e);
  var t = this;
  q.each(e.__folders, function(n) {
    e.removeFolder(n);
  }), q.defer(function() {
    t.onResize();
  });
}, open: function() {
  this.closed = false;
}, close: function() {
  this.closed = true;
}, hide: function() {
  this.domElement.style.display = "none";
}, show: function() {
  this.domElement.style.display = "";
}, onResize: function() {
  var e = this.getRoot();
  if (e.scrollable) {
    var t = F.getOffset(e.__ul).top, n = 0;
    q.each(e.__ul.childNodes, function(r) {
      e.autoPlace && r === e.__save_row || (n += F.getHeight(r));
    }), window.innerHeight - t - No < n ? (F.addClass(e.domElement, Qe.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - No + "px") : (F.removeClass(e.domElement, Qe.CLASS_TOO_TALL), e.__ul.style.height = "auto");
  }
  e.__resize_handle && q.defer(function() {
    e.__resize_handle.style.height = e.__ul.offsetHeight + "px";
  }), e.__closeButton && (e.__closeButton.style.width = e.width + "px");
}, onResizeDebounced: q.debounce(function() {
  this.onResize();
}, 50), remember: function() {
  if (q.isUndefined(Fi) && (Fi = new om(), Fi.domElement.innerHTML = im), this.parent) throw new Error("You can only call remember on a top level GUI.");
  var e = this;
  q.each(Array.prototype.slice.call(arguments), function(t) {
    e.__rememberedObjects.length === 0 && um(e), e.__rememberedObjects.indexOf(t) === -1 && e.__rememberedObjects.push(t);
  }), this.autoPlace && la(this, this.width);
}, getRoot: function() {
  for (var e = this; e.parent; ) e = e.parent;
  return e;
}, getSaveObject: function() {
  var e = this.load;
  return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = gr(this)), e.folders = {}, q.each(this.__folders, function(t, n) {
    e.folders[n] = t.getSaveObject();
  }), e;
}, save: function() {
  this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = gr(this), aa(this, false), this.saveToLocalStorageIfPossible();
}, saveAs: function(e) {
  this.load.remembered || (this.load.remembered = {}, this.load.remembered[zi] = gr(this, true)), this.load.remembered[e] = gr(this), this.preset = e, oa(this, e, true), this.saveToLocalStorageIfPossible();
}, revert: function(e) {
  q.each(this.__controllers, function(t) {
    this.getRoot().load.remembered ? Tl(e || this.getRoot(), t) : t.setValue(t.initialValue), t.__onFinishChange && t.__onFinishChange.call(t, t.getValue());
  }, this), q.each(this.__folders, function(t) {
    t.revert(t);
  }), e || aa(this.getRoot(), false);
}, listen: function(e) {
  var t = this.__listening.length === 0;
  this.__listening.push(e), t && Al(this.__listening);
}, updateDisplay: function() {
  q.each(this.__controllers, function(e) {
    e.updateDisplay();
  }), q.each(this.__folders, function(e) {
    e.updateDisplay();
  });
} });
function xa(i3, e, t) {
  var n = document.createElement("li");
  return e && n.appendChild(e), t ? i3.__ul.insertBefore(n, t) : i3.__ul.appendChild(n), i3.onResize(), n;
}
function Oo(i3) {
  F.unbind(window, "resize", i3.__resizeHandler), i3.saveToLocalStorageIfPossible && F.unbind(window, "unload", i3.saveToLocalStorageIfPossible);
}
function aa(i3, e) {
  var t = i3.__preset_select[i3.__preset_select.selectedIndex];
  e ? t.innerHTML = t.value + "*" : t.innerHTML = t.value;
}
function cm(i3, e, t) {
  if (t.__li = e, t.__gui = i3, q.extend(t, { options: function(a) {
    if (arguments.length > 1) {
      var o = t.__li.nextElementSibling;
      return t.remove(), Oi(i3, t.object, t.property, { before: o, factoryArgs: [q.toArray(arguments)] });
    }
    if (q.isArray(a) || q.isObject(a)) {
      var l = t.__li.nextElementSibling;
      return t.remove(), Oi(i3, t.object, t.property, { before: l, factoryArgs: [a] });
    }
  }, name: function(a) {
    return t.__li.firstElementChild.firstElementChild.innerHTML = a, t;
  }, listen: function() {
    return t.__gui.listen(t), t;
  }, remove: function() {
    return t.__gui.remove(t), t;
  } }), t instanceof ra) {
    var n = new Pr(t.object, t.property, { min: t.__min, max: t.__max, step: t.__step });
    q.each(["updateDisplay", "onChange", "onFinishChange", "step", "min", "max"], function(s) {
      var a = t[s], o = n[s];
      t[s] = n[s] = function() {
        var l = Array.prototype.slice.call(arguments);
        return o.apply(n, l), a.apply(t, l);
      };
    }), F.addClass(e, "has-slider"), t.domElement.insertBefore(n.domElement, t.domElement.firstElementChild);
  } else if (t instanceof Pr) {
    var r = function(a) {
      if (q.isNumber(t.__min) && q.isNumber(t.__max)) {
        var o = t.__li.firstElementChild.firstElementChild.innerHTML, l = t.__gui.__listening.indexOf(t) > -1;
        t.remove();
        var c = Oi(i3, t.object, t.property, { before: t.__li.nextElementSibling, factoryArgs: [t.__min, t.__max, t.__step] });
        return c.name(o), l && c.listen(), c;
      }
      return a;
    };
    t.min = q.compose(r, t.min), t.max = q.compose(r, t.max);
  } else t instanceof Ml ? (F.bind(e, "click", function() {
    F.fakeEvent(t.__checkbox, "click");
  }), F.bind(t.__checkbox, "click", function(s) {
    s.stopPropagation();
  })) : t instanceof yl ? (F.bind(e, "click", function() {
    F.fakeEvent(t.__button, "click");
  }), F.bind(e, "mouseover", function() {
    F.addClass(t.__button, "hover");
  }), F.bind(e, "mouseout", function() {
    F.removeClass(t.__button, "hover");
  })) : t instanceof sa && (F.addClass(e, "color"), t.updateDisplay = q.compose(function(s) {
    return e.style.borderLeftColor = t.__color.toString(), s;
  }, t.updateDisplay), t.updateDisplay());
  t.setValue = q.compose(function(s) {
    return i3.getRoot().__preset_select && t.isModified() && aa(i3.getRoot(), true), s;
  }, t.setValue);
}
function Tl(i3, e) {
  var t = i3.getRoot(), n = t.__rememberedObjects.indexOf(e.object);
  if (n !== -1) {
    var r = t.__rememberedObjectIndecesToControllers[n];
    if (r === void 0 && (r = {}, t.__rememberedObjectIndecesToControllers[n] = r), r[e.property] = e, t.load && t.load.remembered) {
      var s = t.load.remembered, a = void 0;
      if (s[i3.preset]) a = s[i3.preset];
      else if (s[zi]) a = s[zi];
      else return;
      if (a[n] && a[n][e.property] !== void 0) {
        var o = a[n][e.property];
        e.initialValue = o, e.setValue(o);
      }
    }
  }
}
function Oi(i3, e, t, n) {
  if (e[t] === void 0) throw new Error('Object "' + e + '" has no property "' + t + '"');
  var r = void 0;
  if (n.color) r = new sa(e, t);
  else {
    var s = [e, t].concat(n.factoryArgs);
    r = rm.apply(i3, s);
  }
  n.before instanceof Gn && (n.before = n.before.__li), Tl(i3, r), F.addClass(r.domElement, "c");
  var a = document.createElement("span");
  F.addClass(a, "property-name"), a.innerHTML = r.property;
  var o = document.createElement("div");
  o.appendChild(a), o.appendChild(r.domElement);
  var l = xa(i3, o, n.before);
  return F.addClass(l, Qe.CLASS_CONTROLLER_ROW), r instanceof sa ? F.addClass(l, "color") : F.addClass(l, $p(r.getValue())), cm(i3, l, r), i3.__controllers.push(r), r;
}
function oi(i3, e) {
  return document.location.href + "." + e;
}
function oa(i3, e, t) {
  var n = document.createElement("option");
  n.innerHTML = e, n.value = e, i3.__preset_select.appendChild(n), t && (i3.__preset_select.selectedIndex = i3.__preset_select.length - 1);
}
function Bo(i3, e) {
  e.style.display = i3.useLocalStorage ? "block" : "none";
}
function um(i3) {
  var e = i3.__save_row = document.createElement("li");
  F.addClass(i3.domElement, "has-save"), i3.__ul.insertBefore(e, i3.__ul.firstChild), F.addClass(e, "save-row");
  var t = document.createElement("span");
  t.innerHTML = "&nbsp;", F.addClass(t, "button gears");
  var n = document.createElement("span");
  n.innerHTML = "Save", F.addClass(n, "button"), F.addClass(n, "save");
  var r = document.createElement("span");
  r.innerHTML = "New", F.addClass(r, "button"), F.addClass(r, "save-as");
  var s = document.createElement("span");
  s.innerHTML = "Revert", F.addClass(s, "button"), F.addClass(s, "revert");
  var a = i3.__preset_select = document.createElement("select");
  if (i3.load && i3.load.remembered ? q.each(i3.load.remembered, function(h, f) {
    oa(i3, f, f === i3.preset);
  }) : oa(i3, zi, false), F.bind(a, "change", function() {
    for (var h = 0; h < i3.__preset_select.length; h++) i3.__preset_select[h].innerHTML = i3.__preset_select[h].value;
    i3.preset = this.value;
  }), e.appendChild(a), e.appendChild(t), e.appendChild(n), e.appendChild(r), e.appendChild(s), Ii) {
    var o = document.getElementById("dg-local-explain"), l = document.getElementById("dg-local-storage"), c = document.getElementById("dg-save-locally");
    c.style.display = "block", localStorage.getItem(oi(i3, "isLocal")) === "true" && l.setAttribute("checked", "checked"), Bo(i3, o), F.bind(l, "change", function() {
      i3.useLocalStorage = !i3.useLocalStorage, Bo(i3, o);
    });
  }
  var u = document.getElementById("dg-new-constructor");
  F.bind(u, "keydown", function(h) {
    h.metaKey && (h.which === 67 || h.keyCode === 67) && Fi.hide();
  }), F.bind(t, "click", function() {
    u.innerHTML = JSON.stringify(i3.getSaveObject(), void 0, 2), Fi.show(), u.focus(), u.select();
  }), F.bind(n, "click", function() {
    i3.save();
  }), F.bind(r, "click", function() {
    var h = prompt("Enter a new preset name.");
    h && i3.saveAs(h);
  }), F.bind(s, "click", function() {
    i3.revert();
  });
}
function dm(i3) {
  var e = void 0;
  i3.__resize_handle = document.createElement("div"), q.extend(i3.__resize_handle.style, { width: "6px", marginLeft: "-3px", height: "200px", cursor: "ew-resize", position: "absolute" });
  function t(s) {
    return s.preventDefault(), i3.width += e - s.clientX, i3.onResize(), e = s.clientX, false;
  }
  function n() {
    F.removeClass(i3.__closeButton, Qe.CLASS_DRAG), F.unbind(window, "mousemove", t), F.unbind(window, "mouseup", n);
  }
  function r(s) {
    return s.preventDefault(), e = s.clientX, F.addClass(i3.__closeButton, Qe.CLASS_DRAG), F.bind(window, "mousemove", t), F.bind(window, "mouseup", n), false;
  }
  F.bind(i3.__resize_handle, "mousedown", r), F.bind(i3.__closeButton, "mousedown", r), i3.domElement.insertBefore(i3.__resize_handle, i3.domElement.firstElementChild);
}
function la(i3, e) {
  i3.domElement.style.width = e + "px", i3.__save_row && i3.autoPlace && (i3.__save_row.style.width = e + "px"), i3.__closeButton && (i3.__closeButton.style.width = e + "px");
}
function gr(i3, e) {
  var t = {};
  return q.each(i3.__rememberedObjects, function(n, r) {
    var s = {}, a = i3.__rememberedObjectIndecesToControllers[r];
    q.each(a, function(o, l) {
      s[l] = e ? o.initialValue : o.getValue();
    }), t[r] = s;
  }), t;
}
function hm(i3) {
  for (var e = 0; e < i3.__preset_select.length; e++) i3.__preset_select[e].value === i3.preset && (i3.__preset_select.selectedIndex = e);
}
function Al(i3) {
  i3.length !== 0 && am.call(window, function() {
    Al(i3);
  }), q.each(i3, function(e) {
    e.updateDisplay();
  });
}
var fm = Qe;
const Sa = new Jc();
Sa.add(new lu());
const St = new It(75, window.innerWidth / window.innerHeight, 0.1, 1e3);
St.position.set(0, 2, 3.5);
const Nr = new Xp();
Nr.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(Nr.domElement);
window.addEventListener("resize", () => {
  St.aspect = window.innerWidth / window.innerHeight, St.updateProjectionMatrix(), Nr.setSize(window.innerWidth, window.innerHeight);
});
const pm = new Ei(), mm = new iu({ wireframe: true }), wl = new Kt(pm, mm);
wl.position.y = 0.5;
Sa.add(wl);
const Rl = new Ni();
document.body.appendChild(Rl.dom);
const _m = new fm(), An = _m.addFolder("Camera");
An.add(St.position, "x", -10, 10);
An.add(St.position, "y", -10, 10);
An.add(St.position, "z", -10, 10);
An.add(St, "fov", 0, 180, 0.01).onChange(() => {
  St.updateProjectionMatrix();
});
An.add(St, "aspect", 1e-5, 10).onChange(() => {
  St.updateProjectionMatrix();
});
An.add(St, "near", 0.01, 10).onChange(() => {
  St.updateProjectionMatrix();
});
An.add(St, "far", 0.01, 10).onChange(() => {
  St.updateProjectionMatrix();
});
An.open();
function Cl() {
  requestAnimationFrame(Cl), Nr.render(Sa, St), Rl.update();
}
Cl();
