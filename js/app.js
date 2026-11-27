// 画面の動き（入力 → 結果表示 → 共有）
(function () {
  'use strict';
  var JR = window.JapanRank;
  var $ = function (id) { return document.getElementById(id); };
  var current = null;

  JR.loadItems(window.JAPAN_RANK_MANIFEST || [], 'data/items/', function (failed) {
    if (failed.length) console.warn('読み込めなかった項目:', failed);
    renderList();
    route();
    window.addEventListener('hashchange', route);
  });

  // ---------- 一覧 ----------
  function renderList() {
    var box = $('item-list');
    box.innerHTML = '';
    JR.items().forEach(function (item) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'item-card';
      b.innerHTML = '<span class="cat"></span><span class="name"></span>';
      b.querySelector('.cat').textContent = item.category || '';
      b.querySelector('.name').textContent = item.title;
      b.addEventListener('click', function () { location.hash = 'item=' + item.id; });
      box.appendChild(b);
    });
  }

  function route() {
    var m = location.hash.match(/item=([a-z0-9_]+)/);
    var item = m ? JR.getItem(m[1]) : null;
    if (item) showItem(item); else showHome();
  }

  function showHome() {
    current = null;
    $('view-home').hidden = false;
    $('view-item').hidden = true;
    document.title = 'あなたは日本で何番目？';
  }

  // ---------- 入力画面 ----------
  function showItem(item) {
    current = item;
    $('view-home').hidden = true;
    $('view-item').hidden = false;
    $('result').hidden = true;
    $('error').hidden = true;
    $('item-title').textContent = item.title + 'で比べる';
    document.title = item.title + ' | あなたは日本で何番目？';
    $('question').textContent = item.question;
    $('unit').textContent = item.unit || '';
    var inp = $('value');
    inp.value = '';
    inp.placeholder = item.input.placeholder || '';
    inp.min = item.input.min; inp.max = item.input.max; inp.step = item.input.step || 'any';
    inp.inputMode = (item.input.step && item.input.step >= 1) ? 'numeric' : 'decimal';

    var fbox = $('filters');
    fbox.innerHTML = '';
    (item.filters || []).forEach(function (f) {
      var wrap = document.createElement('div');
      wrap.className = 'filter';
      var lab = document.createElement('span');
      lab.className = 'label';
      lab.textContent = f.label;
      wrap.appendChild(lab);
      if (f.options.length > 5) {
        var sel = document.createElement('select');
        sel.name = f.key;
        sel.setAttribute('aria-label', f.label);
        f.options.forEach(function (o) {
          var op = document.createElement('option');
          op.value = o[0]; op.textContent = o[1];
          if (o[0] === f.default) op.selected = true;
          sel.appendChild(op);
        });
        wrap.appendChild(sel);
      } else {
        var chips = document.createElement('div');
        chips.className = 'chips';
        chips.setAttribute('role', 'radiogroup');
        chips.setAttribute('aria-label', f.label);
        f.options.forEach(function (o) {
          var l = document.createElement('label');
          var r = document.createElement('input');
          r.type = 'radio'; r.name = f.key; r.value = o[0];
          if (o[0] === f.default) r.checked = true;
          var s = document.createElement('span');
          s.textContent = o[1];
          l.appendChild(r); l.appendChild(s);
          chips.appendChild(l);
        });
        wrap.appendChild(chips);
      }
      fbox.appendChild(wrap);
    });
    window.scrollTo(0, 0);
  }

  $('back-btn').addEventListener('click', function () { location.hash = ''; });

  $('item-form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (!current) return;
    var item = current;
    var raw = $('value').value.trim();
    var x = Number(raw);
    var err = $('error');
    if (raw === '' || !isFinite(x)) { return showError('数字を入れてください。'); }
    if (x < item.input.min || x > item.input.max) {
      return showError(item.input.min + '〜' + item.input.max + (item.unit || '') + ' の範囲で入れてください。');
    }
    if (item.input.step >= 1 && Math.round(x) !== x) { return showError('整数で入れてください。'); }
    err.hidden = true;

    var form = $('item-form');
    var values = {};
    var labels = [];
    (item.filters || []).forEach(function (f) {
      var el = form.elements[f.key];
      var v = el ? el.value : f.default;
      values[f.key] = v;
      var opt = f.options.filter(function (o) { return o[0] === v; })[0];
      if (opt && v !== 'all') labels.push(opt[1]);
    });
    var key = JR.groupKey(item, values);
    var group = item.groups[key];
    if (!group) { return showError('この組み合わせのデータはありません。'); }
    var r = JR.rankIn(item, group, x);
    var n = JR.groupCount(item, group);
    renderResult(item, x, r, n, labels);

    function showError(msg) { err.textContent = msg; err.hidden = false; }
  });

  // ---------- 結果 ----------
  function renderResult(item, x, r, n, labels) {
    var fromLow = item.rankFrom === 'low';
    var dirWord = fromLow ? item.lower : item.higher;
    var dirHou = dirWord + (/い$/.test(dirWord) ? 'ほう' : 'のほう'); // 例: 高いほう / 年上のほう
    var above = fromLow ? r.below : r.above;
    var within = r.within;
    if (fromLow && within) within = within === 'top' ? 'bottom' : 'top';

    var top = above + r.equal / 2; // 自分より上 + 同じ人の半分
    // 比べる相手（1行目・人数・共有文で共通）。item.scope があれば対象の範囲を必ず出す
    var compareTo = item.scope
      ? item.scope + (labels.length ? '（' + labels.join('・') + '）' : '')
      : (labels.length ? labels.join('・') : '日本全体');
    var cu = item.countUnit || ({ '世帯': '世帯', '住宅': '戸', '夫婦': '組' }[item.subject] || '人');
    var subj = compareTo;
    var ofN = function (n) { return subj + ' 約' + fmtCount(n) + cu + 'の中で、'; };
    var valText = fmtNum(x) + (item.unit || '');

    var bigText, rankText, classText, shareCore;
    if (within === 'top') {
      var pct = above + r.withinShare;
      bigText = '上位 ' + fmtPct(pct) + '<small> 以内</small>';
      rankText = n ? (ofN(n) + dirHou + 'から約' + fmtCount(Math.max(1, pct * n)) + cu + '以内') : '';
      classText = '統計のいちばん' + (fromLow ? '下' : '上') + 'の区分（' + fmtPct(r.withinShare) + '）に入るため、これ以上細かい順位は出せません。';
      shareCore = dirHou + 'から上位' + fmtPct(pct) + '以内';
    } else if (within === 'bottom') {
      var pctb = 1 - above;
      bigText = '下位 ' + fmtPct(pctb) + '<small> 以内</small>';
      rankText = n ? (ofN(n) + dirHou + 'から数えると後ろの約' + fmtCount(Math.max(1, pctb * n)) + cu + 'の中') : '';
      classText = '統計のいちばん' + (fromLow ? '上' : '下') + 'の区分（' + fmtPct(r.withinShare) + '）に入るため、これ以上細かい順位は出せません。';
      shareCore = dirHou + 'から見て下位' + fmtPct(pctb) + '以内';
    } else {
      bigText = '上位 ' + fmtPct(top);
      rankText = n ? (ofN(n) + dirHou + 'から約' + fmtCount(Math.max(1, top * n)) + '番目くらい') : '';
      var c = Math.min(100, Math.max(1, Math.round(top * 100) || 1));
      classText = '100' + cu + (cu === '人' || cu === '組' ? 'いたら' : 'あったら') + '、' + dirHou + 'から <b>' + c + '番目</b> くらい。';
      shareCore = dirHou + 'から上位' + fmtPct(top) + '（100' + cu + '中' + c + '番目くらい）';
    }

    var breakdown = '';
    if (r.equal > 0 && !within) {
      breakdown = 'あなたより' + item.higher + '：' + fmtPct(r.above) + '　同じ：' + fmtPct(r.equal) + '　' + item.lower + '：' + fmtPct(r.below);
    }

    var pos = within === 'top' ? 0.5 * (above + r.withinShare) : within === 'bottom' ? 1 - 0.5 * (1 - above) : top;
    var left = Math.min(98, Math.max(2, (1 - pos) * 100));

    var html = '' +
      '<p class="lead">' + esc(compareTo) + 'の中で、' + esc(item.title) + ' ' + esc(valText) + ' は</p>' +
      '<p class="big">' + bigText + '</p>' +
      '<p class="sub">' + esc(dirHou) + 'から数えて</p>' +
      (rankText ? '<p class="class100">' + esc(rankText) + '</p>' : '') +
      '<p class="class100">' + classText + '</p>' +
      '<div class="meter" aria-hidden="true"><div class="track"><div class="dot" style="left:' + left.toFixed(1) + '%"></div></div>' +
      '<div class="ends"><span>' + esc(item.lower) + '</span><span>' + esc(item.higher) + '</span></div></div>' +
      (breakdown ? '<p class="breakdown">' + esc(breakdown) + '</p>' : '') +
      '<a class="share" id="share-x" target="_blank" rel="noopener">Xで結果を共有</a>' +
      '<a class="secondary" href="#">ほかの項目も試す</a>' +
      '<p class="note">順位・人数は、各統計をもとにこのサイトが計算・加工したもので、各省庁が公表した数字ではありません。出典：' + esc(item.source.name) + '（' + esc(item.source.year) + '）。' + esc(item.method) +
      (item.popNote ? ' ' + esc(item.popNote) : '') +
      ' <a href="sources.html#' + item.id + '">出典の詳細</a></p>';

    var box = $('result');
    box.innerHTML = html;
    box.hidden = false;

    var pageUrl = location.href.split('#')[0] + '#item=' + item.id;
    var text = '【あなたは日本で何番目？】' + compareTo + 'の中で、' +
      '私の' + item.title + '（' + valText + '）は' + shareCore + 'でした';
    var share = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) +
      '&url=' + encodeURIComponent(pageUrl) + '&hashtags=' + encodeURIComponent('あなたは日本で何番目');
    $('share-x').href = share;

    box.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ---------- 表示用の整形 ----------
  function fmtPct(p) {
    var v = p * 100;
    if (v < 0.01) return '0.01%未満';
    if (v > 99.99) return '99.99%超';
    if (v < 1) return v.toFixed(2) + '%';
    if (v > 99) return v.toFixed(2) + '%';
    return v.toFixed(1) + '%';
  }
  function fmtCount(n) {
    n = Math.round(n);
    if (n >= 1e8) {
      var oku = Math.floor(n / 1e8), man = Math.round((n % 1e8) / 1e4);
      return oku + '億' + (man ? man.toLocaleString('ja-JP') + '万' : '');
    }
    if (n >= 1e5) return Math.round(n / 1e4).toLocaleString('ja-JP') + '万';
    if (n >= 1e4) return (Math.round(n / 1e3) / 10).toLocaleString('ja-JP') + '万';
    return n.toLocaleString('ja-JP');
  }
  function fmtNum(x) { return Number(x).toLocaleString('ja-JP', { maximumFractionDigits: 2 }); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // テスト用に公開（画面の動きには使わない）
  window.JapanRankApp = { fmtPct: fmtPct, fmtCount: fmtCount };
})();
