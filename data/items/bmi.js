// 1項目 = このファイル1つ。書き方は README.md「項目の追加方法」を参照。
JapanRank.register({
  "id": "bmi",
  "title": "BMI",
  "category": "からだ",
  "question": "あなたのBMIは？（体重kg ÷ 身長mの2乗）",
  "unit": "",
  "input": {
    "min": 10,
    "max": 60,
    "step": 0.1,
    "placeholder": "22"
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
          "15-19",
          "15〜19歳"
        ],
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
    "male|15-19": {
      "type": "normal",
      "mean": 19.97,
      "sd": 2.54,
      "pop": {
        "sex": "male",
        "age": [
          15,
          19
        ]
      }
    },
    "female|15-19": {
      "type": "normal",
      "mean": 20.51,
      "sd": 2.07,
      "pop": {
        "sex": "female",
        "age": [
          15,
          19
        ]
      }
    },
    "male|20-29": {
      "type": "normal",
      "mean": 22.48,
      "sd": 3.16,
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
      "mean": 20.94,
      "sd": 3.29,
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
      "mean": 23.97,
      "sd": 3.36,
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
      "mean": 21.36,
      "sd": 2.98,
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
      "mean": 24.22,
      "sd": 2.8,
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
      "mean": 22.14,
      "sd": 3.08,
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
      "mean": 24.37,
      "sd": 2.9,
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
      "mean": 22.3,
      "sd": 2.89,
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
      "mean": 23.86,
      "sd": 2.71,
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
      "mean": 22.45,
      "sd": 2.79,
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
      "mean": 23.44,
      "sd": 2.36,
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
      "mean": 22.57,
      "sd": 2.76,
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
      "mean": 23.76,
      "sd": 2.75,
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
      "mean": 22.2,
      "sd": 2.91,
      "pop": {
        "sex": "female",
        "age": [
          20,
          100
        ]
      }
    },
    "all|15-19": {
      "type": "mixture",
      "parts": [
        "male|15-19",
        "female|15-19"
      ]
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
    "table": "第15表 BMIの平均値及び標準偏差（全国補正値、15歳以上、妊婦除外）",
    "year": "2024年（令和6年）10〜11月",
    "published": "e-Stat 公開日 2026-09-11",
    "url": "https://www.e-stat.go.jp/stat-search/files?page=1&layout=dataset&stat_infid=000040502148"
  },
  "method": "性・年齢階級別の平均値と標準偏差から、正規分布を仮定して順位を計算。「指定しない」は男女を人口で重み付けして合成。BMIは高い・低いどちらが良いというものではない。",
  "popNote": "人数は人口推計（2024年10月1日）の該当人口に割合を当てはめた目安。"
});
