// 1項目 = このファイル1つ。書き方は README.md「項目の追加方法」を参照。
JapanRank.register({
  "id": "steps",
  "title": "1日の歩数",
  "category": "からだ",
  "question": "あなたの1日の歩数は？（ふだんの平均）",
  "unit": "歩",
  "input": {
    "min": 100,
    "max": 50000,
    "step": 1,
    "placeholder": "7000"
  },
  "higher": "多い",
  "lower": "少ない",
  "subject": "人",
  "filters": [
    {
      "key": "sex",
      "label": "性別",
      "options": [
        [
          "male",
          "男性"
        ],
        [
          "female",
          "女性"
        ],
        [
          "all",
          "指定しない"
        ]
      ],
      "default": "male"
    },
    {
      "key": "age",
      "label": "年齢",
      "options": [
        [
          "20-29",
          "20代"
        ],
        [
          "30-39",
          "30代"
        ],
        [
          "40-49",
          "40代"
        ],
        [
          "50-59",
          "50代"
        ],
        [
          "60-69",
          "60代"
        ],
        [
          "70+",
          "70歳以上"
        ],
        [
          "20+",
          "20歳以上（全体）"
        ]
      ],
      "default": "20-29"
    }
  ],
  "groups": {
    "all|20+": {
      "type": "lognormal",
      "mean": 7071,
      "sd": 3141,
      "pop": {
        "sex": "all",
        "age": [
          20,
          100
        ]
      }
    },
    "all|20-29": {
      "type": "lognormal",
      "mean": 7992,
      "sd": 3844,
      "pop": {
        "sex": "all",
        "age": [
          20,
          29
        ]
      }
    },
    "all|30-39": {
      "type": "lognormal",
      "mean": 7723,
      "sd": 3613,
      "pop": {
        "sex": "all",
        "age": [
          30,
          39
        ]
      }
    },
    "all|40-49": {
      "type": "lognormal",
      "mean": 7897,
      "sd": 3156,
      "pop": {
        "sex": "all",
        "age": [
          40,
          49
        ]
      }
    },
    "all|50-59": {
      "type": "lognormal",
      "mean": 7954,
      "sd": 3148,
      "pop": {
        "sex": "all",
        "age": [
          50,
          59
        ]
      }
    },
    "all|60-69": {
      "type": "lognormal",
      "mean": 7404,
      "sd": 2986,
      "pop": {
        "sex": "all",
        "age": [
          60,
          69
        ]
      }
    },
    "all|70+": {
      "type": "lognormal",
      "mean": 5623,
      "sd": 2639,
      "pop": {
        "sex": "all",
        "age": [
          70,
          100
        ]
      }
    },
    "male|20+": {
      "type": "lognormal",
      "mean": 7763,
      "sd": 3425,
      "pop": {
        "sex": "male",
        "age": [
          20,
          100
        ]
      }
    },
    "male|20-29": {
      "type": "lognormal",
      "mean": 8802,
      "sd": 4161,
      "pop": {
        "sex": "male",
        "age": [
          20,
          29
        ]
      }
    },
    "male|30-39": {
      "type": "lognormal",
      "mean": 8880,
      "sd": 3887,
      "pop": {
        "sex": "male",
        "age": [
          30,
          39
        ]
      }
    },
    "male|40-49": {
      "type": "lognormal",
      "mean": 8671,
      "sd": 3418,
      "pop": {
        "sex": "male",
        "age": [
          40,
          49
        ]
      }
    },
    "male|50-59": {
      "type": "lognormal",
      "mean": 8472,
      "sd": 3567,
      "pop": {
        "sex": "male",
        "age": [
          50,
          59
        ]
      }
    },
    "male|60-69": {
      "type": "lognormal",
      "mean": 8015,
      "sd": 3286,
      "pop": {
        "sex": "male",
        "age": [
          60,
          69
        ]
      }
    },
    "male|70+": {
      "type": "lognormal",
      "mean": 6219,
      "sd": 2827,
      "pop": {
        "sex": "male",
        "age": [
          70,
          100
        ]
      }
    },
    "female|20+": {
      "type": "lognormal",
      "mean": 6495,
      "sd": 2813,
      "pop": {
        "sex": "female",
        "age": [
          20,
          100
        ]
      }
    },
    "female|20-29": {
      "type": "lognormal",
      "mean": 7414,
      "sd": 3484,
      "pop": {
        "sex": "female",
        "age": [
          20,
          29
        ]
      }
    },
    "female|30-39": {
      "type": "lognormal",
      "mean": 6667,
      "sd": 3135,
      "pop": {
        "sex": "female",
        "age": [
          30,
          39
        ]
      }
    },
    "female|40-49": {
      "type": "lognormal",
      "mean": 7259,
      "sd": 2818,
      "pop": {
        "sex": "female",
        "age": [
          40,
          49
        ]
      }
    },
    "female|50-59": {
      "type": "lognormal",
      "mean": 7526,
      "sd": 2735,
      "pop": {
        "sex": "female",
        "age": [
          50,
          59
        ]
      }
    },
    "female|60-69": {
      "type": "lognormal",
      "mean": 6852,
      "sd": 2643,
      "pop": {
        "sex": "female",
        "age": [
          60,
          69
        ]
      }
    },
    "female|70+": {
      "type": "lognormal",
      "mean": 5140,
      "sd": 2423,
      "pop": {
        "sex": "female",
        "age": [
          70,
          100
        ]
      }
    }
  },
  "source": {
    "name": "厚生労働省「令和6年 国民健康・栄養調査」",
    "table": "第44表 歩数の平均値及び標準偏差（全国補正値、20歳以上）",
    "year": "2024年（令和6年）10〜11月",
    "published": "e-Stat 公開日 2026-09-11",
    "url": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=dataset&stat_infid=000040502197"
  },
  "method": "性・年齢階級別の平均値と標準偏差から、対数正規分布（右に裾が長い形）を仮定して順位を計算。集計対象は歩数計を1日装着した人で、100歩未満・5万歩以上は除外されている。",
  "popNote": "人数は人口推計（2024年10月1日）の該当人口に割合を当てはめた目安。"
});
