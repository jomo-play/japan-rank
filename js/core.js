// あなたは日本で何番目？ — 計算の中心部分
// 入力値はこの端末（ブラウザ）の中だけで計算し、どこにも送信しない。
(function () {
  'use strict';

  var items = [];
  var population = null;

  // ---------- 登録 ----------
  function register(item) {
    items.push(item);
  }
  function setPopulation(p) {
    population = p;
  }

  // データファイルを順番に読み込む（サーバー不要。file:// でも動く）
  function loadItems(ids, base, done) {
    var left = ids.length;
    var failed = [];
    if (!left) { done(failed); return; }
    ids.forEach(function (id) {
      var s = document.createElement('script');
      s.src = base + id + '.js';
      s.onload = finish;
      s.onerror = function () { failed.push(id); finish(); };
      document.head.appendChild(s);
    });
    function finish() {
      left -= 1;
      if (left === 0) {
        // manifest の順番に並べ直す
        items.sort(function (a, b) { return ids.indexOf(a.id) - ids.indexOf(b.id); });
        done(failed);
      }
    }
  }

  // ---------- 人口 ----------
  function popCount(spec) {
    if (!population || !spec) return null;
    var lo = spec.age[0], hi = Math.min(spec.age[1], 100);
    var sum = 0;
    for (var a = lo; a <= hi; a++) {
      if (spec.sex === 'male' || spec.sex === 'all') sum += population.male[a];
      if (spec.sex === 'female' || spec.sex === 'all') sum += population.female[a];
    }
    return sum * population.unit;
  }

  // ---------- 分布の計算 ----------
  // erf の近似（Abramowitz & Stegun 7.1.26、誤差 1.5e-7 以下）
  function erf(x) {
    var sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    var t = 1 / (1 + 0.3275911 * x);
    var y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
    return sign * y;
  }
  function normCdf(z) { return 0.5 * (1 + erf(z / Math.SQRT2)); }

  // 結果: { above: x より大きい割合, equal: 同じ割合, below: 小さい割合, within: null | 'top' | 'bottom', withinShare }
  function rankIn(item, group, x) {
    var d = group;
    switch (d.type) {
      case 'normal': {
        var above = 1 - normCdf((x - d.mean) / d.sd);
        return { above: above, equal: 0, below: 1 - above, within: null };
      }
      case 'lognormal': {
        if (x <= 0) return { above: 1, equal: 0, below: 0, within: null };
        var s2 = Math.log(1 + (d.sd * d.sd) / (d.mean * d.mean));
        var mu = Math.log(d.mean) - s2 / 2;
        var ab = 1 - normCdf((Math.log(x) - mu) / Math.sqrt(s2));
        return { above: ab, equal: 0, below: 1 - ab, within: null };
      }
      case 'bins': return rankBins(d.bins, x, d.closed === 'right');
      case 'discrete': return rankDiscrete(d.bins, Math.round(x));
      case 'population': return rankDiscrete(populationBins(d.sex), Math.floor(x));
      case 'mixture': {
        var res = { above: 0, equal: 0, below: 0, within: null };
        var parts = d.parts.map(function (k) { return item.groups[k]; });
        var ws = parts.map(function (p) { return groupCount(item, p) || 0; });
        var tot = ws.reduce(function (a, b) { return a + b; }, 0);
        parts.forEach(function (p, i) {
          var r = rankIn(item, p, x);
          var w = tot ? ws[i] / tot : 1 / parts.length;
          res.above += w * r.above; res.equal += w * r.equal; res.below += w * r.below;
        });
        return res;
      }
    }
    throw new Error('unknown dist type: ' + d.type);
  }

  // 連続値の階級データ: [下限, 上限, 人数または割合]。null は「上限/下限なし」。下限=上限は1点（例: 0分）
  // rightClosed=false: 「下限以上・上限未満」（既定）。true: 「下限超・上限以下」（例: 国税庁の「100万円超200万円以下」）
  function rankBins(bins, x, rightClosed) {
    var tot = 0, above = 0, equal = 0, below = 0, within = null, withinShare = 0;
    bins.forEach(function (b) { tot += b[2]; });
    bins.forEach(function (b) {
      var lo = b[0], hi = b[1], w = b[2] / tot;
      if (lo !== null && hi !== null && lo === hi) {
        if (x > lo) below += w; else if (x === lo) equal += w; else above += w;
        return;
      }
      var L = lo === null ? -Infinity : lo;
      var H = hi === null ? Infinity : hi;
      if (rightClosed ? x > H : x >= H) { below += w; return; }
      if (rightClosed ? x <= L : x < L) { above += w; return; }
      if (hi === null) { within = 'top'; withinShare = w; equal += w; return; }
      if (lo === null) { within = 'bottom'; withinShare = w; equal += w; return; }
      var f = (x - L) / (H - L);
      below += w * f; above += w * (1 - f);
    });
    return { above: above, equal: equal, below: below, within: within, withinShare: withinShare };
  }

  // 整数の階級データ: [下限, 上限, 人数または割合]。上限 null は「下限以上ぜんぶ」
  function rankDiscrete(bins, x) {
    var tot = 0, above = 0, equal = 0, below = 0, within = null, withinShare = 0;
    bins.forEach(function (b) { tot += b[2]; });
    bins.forEach(function (b) {
      var lo = b[0], hi = b[1], w = b[2] / tot;
      if (hi === null) {
        if (x >= lo) { within = 'top'; withinShare = w; equal += w; }
        else above += w;
        return;
      }
      if (x > hi) { below += w; return; }
      if (x < lo) { above += w; return; }
      var n = hi - lo + 1, per = w / n;
      below += per * (x - lo); equal += per; above += per * (hi - x);
    });
    return { above: above, equal: equal, below: below, within: within, withinShare: withinShare };
  }

  function populationBins(sex) {
    var bins = [];
    for (var a = 0; a <= 100; a++) {
      var v = 0;
      if (sex === 'male' || sex === 'all') v += population.male[a];
      if (sex === 'female' || sex === 'all') v += population.female[a];
      bins.push([a, a === 100 ? null : a, v]);
    }
    return bins;
  }

  // グループの母数（人・世帯・戸など）
  function groupCount(item, g) {
    if (!g) return null;
    if (typeof g.count === 'number') return g.count;
    if (g.type === 'population') return popCount({ sex: g.sex, age: [0, 100] });
    if (g.pop) return popCount(g.pop);
    if (g.type === 'mixture') {
      var s = 0;
      for (var i = 0; i < g.parts.length; i++) {
        var c = groupCount(item, item.groups[g.parts[i]]);
        if (c === null) return null;
        s += c;
      }
      return s;
    }
    return null;
  }

  function groupKey(item, values) {
    return (item.filters || []).map(function (f) { return values[f.key]; }).join('|');
  }

  window.JapanRank = {
    register: register,
    setPopulation: setPopulation,
    loadItems: loadItems,
    items: function () { return items; },
    getItem: function (id) { return items.filter(function (i) { return i.id === id; })[0] || null; },
    population: function () { return population; },
    rankIn: rankIn,
    groupCount: groupCount,
    groupKey: groupKey,
    _normCdf: normCdf
  };
})();
