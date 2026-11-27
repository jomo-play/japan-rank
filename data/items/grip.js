// 1項目 = このファイル1つ。書き方は README.md「項目の追加方法」を参照。
JapanRank.register({
  "id": "grip",
  "title": "握力",
  "category": "からだ",
  "question": "あなたの握力は？（左右の良いほうでOK。公式は左右2回ずつの良い記録の平均）",
  "unit": "kg",
  "input": {
    "min": 1,
    "max": 120,
    "step": 0.1,
    "placeholder": "40"
  },
  "higher": "強い",
  "lower": "弱い",
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
          "12-14",
          "12〜14歳"
        ],
        [
          "15-19",
          "15〜19歳"
        ],
        [
          "20-24",
          "20〜24歳"
        ],
        [
          "25-29",
          "25〜29歳"
        ],
        [
          "30-34",
          "30〜34歳"
        ],
        [
          "35-39",
          "35〜39歳"
        ],
        [
          "40-44",
          "40〜44歳"
        ],
        [
          "45-49",
          "45〜49歳"
        ],
        [
          "50-54",
          "50〜54歳"
        ],
        [
          "55-59",
          "55〜59歳"
        ],
        [
          "60-64",
          "60〜64歳"
        ],
        [
          "65-69",
          "65〜69歳"
        ],
        [
          "70-74",
          "70〜74歳"
        ],
        [
          "75-79",
          "75〜79歳"
        ],
        [
          "20-79",
          "20〜79歳（全体）"
        ]
      ],
      "default": "20-24"
    }
  ],
  "groups": {
    "male|12": {
      "type": "normal",
      "mean": 24.4,
      "sd": 6.47,
      "pop": {
        "sex": "male",
        "age": [
          12,
          12
        ]
      }
    },
    "female|12": {
      "type": "normal",
      "mean": 21.79,
      "sd": 4.63,
      "pop": {
        "sex": "female",
        "age": [
          12,
          12
        ]
      }
    },
    "male|13": {
      "type": "normal",
      "mean": 30.52,
      "sd": 7.2,
      "pop": {
        "sex": "male",
        "age": [
          13,
          13
        ]
      }
    },
    "female|13": {
      "type": "normal",
      "mean": 23.91,
      "sd": 4.73,
      "pop": {
        "sex": "female",
        "age": [
          13,
          13
        ]
      }
    },
    "male|14": {
      "type": "normal",
      "mean": 35.26,
      "sd": 7.49,
      "pop": {
        "sex": "male",
        "age": [
          14,
          14
        ]
      }
    },
    "female|14": {
      "type": "normal",
      "mean": 25.21,
      "sd": 4.61,
      "pop": {
        "sex": "female",
        "age": [
          14,
          14
        ]
      }
    },
    "male|15": {
      "type": "normal",
      "mean": 37.01,
      "sd": 7.51,
      "pop": {
        "sex": "male",
        "age": [
          15,
          15
        ]
      }
    },
    "female|15": {
      "type": "normal",
      "mean": 25.23,
      "sd": 4.67,
      "pop": {
        "sex": "female",
        "age": [
          15,
          15
        ]
      }
    },
    "male|16": {
      "type": "normal",
      "mean": 38.92,
      "sd": 7.5,
      "pop": {
        "sex": "male",
        "age": [
          16,
          16
        ]
      }
    },
    "female|16": {
      "type": "normal",
      "mean": 25.95,
      "sd": 4.86,
      "pop": {
        "sex": "female",
        "age": [
          16,
          16
        ]
      }
    },
    "male|17": {
      "type": "normal",
      "mean": 40.74,
      "sd": 7.84,
      "pop": {
        "sex": "male",
        "age": [
          17,
          17
        ]
      }
    },
    "female|17": {
      "type": "normal",
      "mean": 26.39,
      "sd": 5.12,
      "pop": {
        "sex": "female",
        "age": [
          17,
          17
        ]
      }
    },
    "male|18": {
      "type": "normal",
      "mean": 40.01,
      "sd": 6.87,
      "pop": {
        "sex": "male",
        "age": [
          18,
          18
        ]
      }
    },
    "female|18": {
      "type": "normal",
      "mean": 25.55,
      "sd": 4.62,
      "pop": {
        "sex": "female",
        "age": [
          18,
          18
        ]
      }
    },
    "male|19": {
      "type": "normal",
      "mean": 40.28,
      "sd": 6.64,
      "pop": {
        "sex": "male",
        "age": [
          19,
          19
        ]
      }
    },
    "female|19": {
      "type": "normal",
      "mean": 25.69,
      "sd": 4.35,
      "pop": {
        "sex": "female",
        "age": [
          19,
          19
        ]
      }
    },
    "male|20-24": {
      "type": "normal",
      "mean": 44.04,
      "sd": 7.55,
      "pop": {
        "sex": "male",
        "age": [
          20,
          24
        ]
      }
    },
    "female|20-24": {
      "type": "normal",
      "mean": 27.12,
      "sd": 4.77,
      "pop": {
        "sex": "female",
        "age": [
          20,
          24
        ]
      }
    },
    "male|25-29": {
      "type": "normal",
      "mean": 45.06,
      "sd": 7.42,
      "pop": {
        "sex": "male",
        "age": [
          25,
          29
        ]
      }
    },
    "female|25-29": {
      "type": "normal",
      "mean": 27.31,
      "sd": 4.77,
      "pop": {
        "sex": "female",
        "age": [
          25,
          29
        ]
      }
    },
    "male|30-34": {
      "type": "normal",
      "mean": 45.8,
      "sd": 7.45,
      "pop": {
        "sex": "male",
        "age": [
          30,
          34
        ]
      }
    },
    "female|30-34": {
      "type": "normal",
      "mean": 27.55,
      "sd": 4.74,
      "pop": {
        "sex": "female",
        "age": [
          30,
          34
        ]
      }
    },
    "male|35-39": {
      "type": "normal",
      "mean": 45.73,
      "sd": 7.49,
      "pop": {
        "sex": "male",
        "age": [
          35,
          39
        ]
      }
    },
    "female|35-39": {
      "type": "normal",
      "mean": 27.79,
      "sd": 4.68,
      "pop": {
        "sex": "female",
        "age": [
          35,
          39
        ]
      }
    },
    "male|40-44": {
      "type": "normal",
      "mean": 45.68,
      "sd": 7.28,
      "pop": {
        "sex": "male",
        "age": [
          40,
          44
        ]
      }
    },
    "female|40-44": {
      "type": "normal",
      "mean": 28.06,
      "sd": 4.71,
      "pop": {
        "sex": "female",
        "age": [
          40,
          44
        ]
      }
    },
    "male|45-49": {
      "type": "normal",
      "mean": 45.09,
      "sd": 7.06,
      "pop": {
        "sex": "male",
        "age": [
          45,
          49
        ]
      }
    },
    "female|45-49": {
      "type": "normal",
      "mean": 27.65,
      "sd": 4.66,
      "pop": {
        "sex": "female",
        "age": [
          45,
          49
        ]
      }
    },
    "male|50-54": {
      "type": "normal",
      "mean": 43.73,
      "sd": 6.67,
      "pop": {
        "sex": "male",
        "age": [
          50,
          54
        ]
      }
    },
    "female|50-54": {
      "type": "normal",
      "mean": 26.76,
      "sd": 4.71,
      "pop": {
        "sex": "female",
        "age": [
          50,
          54
        ]
      }
    },
    "male|55-59": {
      "type": "normal",
      "mean": 43.27,
      "sd": 6.6,
      "pop": {
        "sex": "male",
        "age": [
          55,
          59
        ]
      }
    },
    "female|55-59": {
      "type": "normal",
      "mean": 26.68,
      "sd": 4.37,
      "pop": {
        "sex": "female",
        "age": [
          55,
          59
        ]
      }
    },
    "male|60-64": {
      "type": "normal",
      "mean": 41.37,
      "sd": 6.31,
      "pop": {
        "sex": "male",
        "age": [
          60,
          64
        ]
      }
    },
    "female|60-64": {
      "type": "normal",
      "mean": 25.75,
      "sd": 4.26,
      "pop": {
        "sex": "female",
        "age": [
          60,
          64
        ]
      }
    },
    "male|65-69": {
      "type": "normal",
      "mean": 39.56,
      "sd": 6.31,
      "pop": {
        "sex": "male",
        "age": [
          65,
          69
        ]
      }
    },
    "female|65-69": {
      "type": "normal",
      "mean": 25.01,
      "sd": 3.95,
      "pop": {
        "sex": "female",
        "age": [
          65,
          69
        ]
      }
    },
    "male|70-74": {
      "type": "normal",
      "mean": 37.76,
      "sd": 6.29,
      "pop": {
        "sex": "male",
        "age": [
          70,
          74
        ]
      }
    },
    "female|70-74": {
      "type": "normal",
      "mean": 23.87,
      "sd": 4.01,
      "pop": {
        "sex": "female",
        "age": [
          70,
          74
        ]
      }
    },
    "male|75-79": {
      "type": "normal",
      "mean": 35.68,
      "sd": 6.0,
      "pop": {
        "sex": "male",
        "age": [
          75,
          79
        ]
      }
    },
    "female|75-79": {
      "type": "normal",
      "mean": 22.61,
      "sd": 4.09,
      "pop": {
        "sex": "female",
        "age": [
          75,
          79
        ]
      }
    },
    "male|12-14": {
      "type": "mixture",
      "parts": [
        "male|12",
        "male|13",
        "male|14"
      ]
    },
    "male|15-19": {
      "type": "mixture",
      "parts": [
        "male|15",
        "male|16",
        "male|17",
        "male|18",
        "male|19"
      ]
    },
    "male|20-79": {
      "type": "mixture",
      "parts": [
        "male|20-24",
        "male|25-29",
        "male|30-34",
        "male|35-39",
        "male|40-44",
        "male|45-49",
        "male|50-54",
        "male|55-59",
        "male|60-64",
        "male|65-69",
        "male|70-74",
        "male|75-79"
      ]
    },
    "female|12-14": {
      "type": "mixture",
      "parts": [
        "female|12",
        "female|13",
        "female|14"
      ]
    },
    "female|15-19": {
      "type": "mixture",
      "parts": [
        "female|15",
        "female|16",
        "female|17",
        "female|18",
        "female|19"
      ]
    },
    "female|20-79": {
      "type": "mixture",
      "parts": [
        "female|20-24",
        "female|25-29",
        "female|30-34",
        "female|35-39",
        "female|40-44",
        "female|45-49",
        "female|50-54",
        "female|55-59",
        "female|60-64",
        "female|65-69",
        "female|70-74",
        "female|75-79"
      ]
    },
    "all|12-14": {
      "type": "mixture",
      "parts": [
        "male|12-14",
        "female|12-14"
      ]
    },
    "all|15-19": {
      "type": "mixture",
      "parts": [
        "male|15-19",
        "female|15-19"
      ]
    },
    "all|20-24": {
      "type": "mixture",
      "parts": [
        "male|20-24",
        "female|20-24"
      ]
    },
    "all|25-29": {
      "type": "mixture",
      "parts": [
        "male|25-29",
        "female|25-29"
      ]
    },
    "all|30-34": {
      "type": "mixture",
      "parts": [
        "male|30-34",
        "female|30-34"
      ]
    },
    "all|35-39": {
      "type": "mixture",
      "parts": [
        "male|35-39",
        "female|35-39"
      ]
    },
    "all|40-44": {
      "type": "mixture",
      "parts": [
        "male|40-44",
        "female|40-44"
      ]
    },
    "all|45-49": {
      "type": "mixture",
      "parts": [
        "male|45-49",
        "female|45-49"
      ]
    },
    "all|50-54": {
      "type": "mixture",
      "parts": [
        "male|50-54",
        "female|50-54"
      ]
    },
    "all|55-59": {
      "type": "mixture",
      "parts": [
        "male|55-59",
        "female|55-59"
      ]
    },
    "all|60-64": {
      "type": "mixture",
      "parts": [
        "male|60-64",
        "female|60-64"
      ]
    },
    "all|65-69": {
      "type": "mixture",
      "parts": [
        "male|65-69",
        "female|65-69"
      ]
    },
    "all|70-74": {
      "type": "mixture",
      "parts": [
        "male|70-74",
        "female|70-74"
      ]
    },
    "all|75-79": {
      "type": "mixture",
      "parts": [
        "male|75-79",
        "female|75-79"
      ]
    },
    "all|20-79": {
      "type": "mixture",
      "parts": [
        "male|20-79",
        "female|20-79"
      ]
    }
  },
  "source": {
    "name": "スポーツ庁「令和7年度 体力・運動能力調査」",
    "table": "表1 年齢別テストの結果（握力 平均値・標準偏差。Excel内の表記は表－1-1）",
    "year": "2025年度（令和7年度）",
    "published": "e-Stat 公開日 2026-10-11",
    "url": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=dataset&stat_infid=000040514896"
  },
  "method": "年齢別・男女別の平均値と標準偏差から、正規分布を仮定して順位を計算。12〜14歳・15〜19歳・20〜79歳（全体）・「指定しない」は、各年齢の分布を人口推計（2024年10月）の人数で重み付けして合成。",
  "popNote": "人数は人口推計（2024年10月1日）の該当人口に割合を当てはめた目安。"
});
