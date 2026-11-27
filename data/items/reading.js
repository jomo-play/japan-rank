// 1項目 = このファイル1つ。書き方は README.md「項目の追加方法」を参照。
JapanRank.register({
  "id": "reading",
  "title": "読書量",
  "category": "くらし",
  "question": "1か月に読む本は何冊？（電子書籍を含み、雑誌・漫画は除く）",
  "unit": "冊",
  "input": {
    "min": 0,
    "max": 500,
    "step": 1,
    "placeholder": "1"
  },
  "higher": "多い",
  "lower": "少ない",
  "scope": "16歳以上の人",
  "subject": "人",
  "filters": [],
  "groups": {
    "": {
      "type": "discrete",
      "bins": [
        [
          0,
          0,
          62.6
        ],
        [
          1,
          2,
          27.6
        ],
        [
          3,
          4,
          6.0
        ],
        [
          5,
          6,
          1.5
        ],
        [
          7,
          null,
          1.8
        ]
      ],
      "pop": {
        "sex": "all",
        "age": [
          16,
          100
        ]
      }
    }
  },
  "source": {
    "name": "文化庁「令和5年度 国語に関する世論調査」",
    "table": "結果の概要 問7 1か月に読む本の冊数（全国16歳以上、有効回答3,559人）",
    "year": "2024年（令和6年）1〜3月",
    "url": "https://www.bunka.go.jp/tokei_hakusho_shuppan/tokeichosa/kokugo_yoronchosa/pdf/94116401_01.pdf"
  },
  "method": "「読まない」「1、2冊」「3、4冊」「5、6冊」「7冊以上」の割合（無回答0.5%を除いて合計100%に調整）を使い、同じ区分の中の冊数（例: 1冊と2冊）は同じ割合と仮定して計算。7冊以上は「○%以内」と表示。",
  "popNote": "人数は人口推計（2024年10月1日）の16歳以上人口に割合を当てはめた目安。"
});
