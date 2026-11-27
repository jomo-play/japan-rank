// 1項目 = このファイル1つ。書き方は README.md「項目の追加方法」を参照。
JapanRank.register({
  "id": "age",
  "title": "年齢",
  "category": "からだ",
  "question": "あなたの年齢は？",
  "unit": "歳",
  "input": {
    "min": 0,
    "max": 120,
    "step": 1,
    "placeholder": "30"
  },
  "higher": "年上",
  "lower": "年下",
  "subject": "人",
  "filters": [
    {
      "key": "sex",
      "label": "比べる相手",
      "options": [
        [
          "all",
          "全員"
        ],
        [
          "male",
          "男性"
        ],
        [
          "female",
          "女性"
        ]
      ],
      "default": "all"
    }
  ],
  "groups": {
    "all": {
      "type": "population",
      "sex": "all"
    },
    "male": {
      "type": "population",
      "sex": "male"
    },
    "female": {
      "type": "population",
      "sex": "female"
    }
  },
  "source": {
    "name": "総務省統計局「人口推計」",
    "table": "第1表 年齢（各歳）、男女別人口（総人口、2024年10月1日現在）",
    "year": "2024年10月1日現在",
    "published": "e-Stat 公開日 2025-04-14",
    "url": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=dataset&stat_infid=000040268910"
  },
  "method": "各歳の人口（千人単位）から、あなたより年上の人・同い年の人の数を数えて計算。100歳以上はひとまとめ。",
  "popNote": "人数は人口推計（2024年10月1日）の総人口1億2,380万人（男女別も同表）。"
});
