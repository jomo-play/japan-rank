// 1項目 = このファイル1つ。書き方は README.md「項目の追加方法」を参照。
JapanRank.register({
  "id": "height",
  "title": "身長",
  "category": "からだ",
  "question": "あなたの身長は？",
  "unit": "cm",
  "input": {
    "min": 100,
    "max": 230,
    "step": 0.1,
    "placeholder": "170"
  },
  "higher": "高い",
  "lower": "低い",
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
    "male|20-29": {
      "type": "normal",
      "mean": 171.4,
      "sd": 5.5,
      "pop": {
        "sex": "male",
        "age": [
          20,
          29
        ]
      }
    },
    "female|20-29": {
      "type": "normal",
      "mean": 158,
      "sd": 5,
      "pop": {
        "sex": "female",
        "age": [
          20,
          29
        ]
      }
    },
    "male|30-39": {
      "type": "normal",
      "mean": 171.6,
      "sd": 4.8,
      "pop": {
        "sex": "male",
        "age": [
          30,
          39
        ]
      }
    },
    "female|30-39": {
      "type": "normal",
      "mean": 158,
      "sd": 4.4,
      "pop": {
        "sex": "female",
        "age": [
          30,
          39
        ]
      }
    },
    "male|40-49": {
      "type": "normal",
      "mean": 171.6,
      "sd": 4.4,
      "pop": {
        "sex": "male",
        "age": [
          40,
          49
        ]
      }
    },
    "female|40-49": {
      "type": "normal",
      "mean": 158.2,
      "sd": 4.1,
      "pop": {
        "sex": "female",
        "age": [
          40,
          49
        ]
      }
    },
    "male|50-59": {
      "type": "normal",
      "mean": 170.5,
      "sd": 4.5,
      "pop": {
        "sex": "male",
        "age": [
          50,
          59
        ]
      }
    },
    "female|50-59": {
      "type": "normal",
      "mean": 157.6,
      "sd": 4.3,
      "pop": {
        "sex": "female",
        "age": [
          50,
          59
        ]
      }
    },
    "male|60-69": {
      "type": "normal",
      "mean": 168.9,
      "sd": 4.4,
      "pop": {
        "sex": "male",
        "age": [
          60,
          69
        ]
      }
    },
    "female|60-69": {
      "type": "normal",
      "mean": 155.4,
      "sd": 4.3,
      "pop": {
        "sex": "female",
        "age": [
          60,
          69
        ]
      }
    },
    "male|70+": {
      "type": "normal",
      "mean": 164.2,
      "sd": 4.6,
      "pop": {
        "sex": "male",
        "age": [
          70,
          100
        ]
      }
    },
    "female|70+": {
      "type": "normal",
      "mean": 150.5,
      "sd": 4.5,
      "pop": {
        "sex": "female",
        "age": [
          70,
          100
        ]
      }
    },
    "male|20+": {
      "type": "normal",
      "mean": 168.4,
      "sd": 5.2,
      "pop": {
        "sex": "male",
        "age": [
          20,
          100
        ]
      }
    },
    "female|20+": {
      "type": "normal",
      "mean": 154.9,
      "sd": 5.1,
      "pop": {
        "sex": "female",
        "age": [
          20,
          100
        ]
      }
    },
    "all|20-29": {
      "type": "mixture",
      "parts": [
        "male|20-29",
        "female|20-29"
      ]
    },
    "all|30-39": {
      "type": "mixture",
      "parts": [
        "male|30-39",
        "female|30-39"
      ]
    },
    "all|40-49": {
      "type": "mixture",
      "parts": [
        "male|40-49",
        "female|40-49"
      ]
    },
    "all|50-59": {
      "type": "mixture",
      "parts": [
        "male|50-59",
        "female|50-59"
      ]
    },
    "all|60-69": {
      "type": "mixture",
      "parts": [
        "male|60-69",
        "female|60-69"
      ]
    },
    "all|70+": {
      "type": "mixture",
      "parts": [
        "male|70+",
        "female|70+"
      ]
    },
    "all|20+": {
      "type": "mixture",
      "parts": [
        "male|20+",
        "female|20+"
      ]
    }
  },
  "source": {
    "name": "厚生労働省「令和6年 国民健康・栄養調査」",
    "table": "第14表 身長・体重の平均値及び標準偏差（全国補正値）",
    "year": "2024年（令和6年）10〜11月",
    "published": "e-Stat 公開日 2026-09-11",
    "url": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=dataset&stat_infid=000040502147"
  },
  "method": "性・年齢階級別の平均値と標準偏差から、正規分布を仮定して順位を計算。「指定しない」は男女の分布を人口推計（2024年10月）の人数で重み付けして合成。",
  "popNote": "人数は人口推計（2024年10月1日）の該当人口に割合を当てはめた目安。"
});
