window.PAGEDATA={
  "title": "หน้า 2 · ชาเบลนด์ Asahi + Ujitawara",
  "groups": {
    "A100": {
      "name": "Asahi 100%",
      "color": "#D55E00",
      "symbol": "circle"
    },
    "A75": {
      "name": "Asahi 75% + Ujitawara 25%",
      "color": "#E69F00",
      "symbol": "diamond"
    },
    "A50": {
      "name": "Asahi 50% + Ujitawara 50%",
      "color": "#777777",
      "symbol": "square"
    },
    "A25": {
      "name": "Asahi 25% + Ujitawara 75%",
      "color": "#56B4E9",
      "symbol": "cross"
    },
    "U100": {
      "name": "Ujitawara 100%",
      "color": "#0072B2",
      "symbol": "circle-open"
    }
  },
  "cycles": [
    2,
    3,
    4,
    5,
    6
  ],
  "parts": [
    {
      "key": "p1",
      "label": "PCA · 5 composition groups",
      "desc": "PCA จากข้อมูล Resting-corrected โดยคำนวณ Mean Sampling − Mean Resting ในแต่ละ Cycle แล้วเฉลี่ย Cycle 2–6 ต่อ Replicate · ใช้ 8 sensors: G2, G3, G5, G6, G10, G11, G13, G14 · รวม Pure references และ Blend ทั้ง 5 กลุ่ม",
      "views": [
        {
          "key": "v",
          "label": "Mean Cycle 2–6",
          "pts": [
            {
              "s": "A100",
              "rep": "1",
              "c": 0,
              "x": 4.949818,
              "y": -0.406098,
              "z": 0.172136
            },
            {
              "s": "U100",
              "rep": "1",
              "c": 0,
              "x": -1.83435,
              "y": -0.080977,
              "z": 0.265207
            },
            {
              "s": "A100",
              "rep": "2",
              "c": 0,
              "x": 5.592528,
              "y": -0.204385,
              "z": 0.049254
            },
            {
              "s": "A100",
              "rep": "3",
              "c": 0,
              "x": 4.749731,
              "y": -0.063777,
              "z": -0.187078
            },
            {
              "s": "U100",
              "rep": "2",
              "c": 0,
              "x": -1.33912,
              "y": 0.218125,
              "z": 0.330632
            },
            {
              "s": "U100",
              "rep": "3",
              "c": 0,
              "x": -1.769249,
              "y": -0.041872,
              "z": 0.252174
            },
            {
              "s": "A50",
              "rep": "1",
              "c": 0,
              "x": -1.239111,
              "y": -0.089226,
              "z": -0.060248
            },
            {
              "s": "A50",
              "rep": "2",
              "c": 0,
              "x": -1.145011,
              "y": -0.338343,
              "z": 0.031441
            },
            {
              "s": "A50",
              "rep": "3",
              "c": 0,
              "x": -1.181285,
              "y": -0.412642,
              "z": -0.099554
            },
            {
              "s": "A25",
              "rep": "1",
              "c": 0,
              "x": 0.705345,
              "y": 1.825473,
              "z": 0.013104
            },
            {
              "s": "A25",
              "rep": "2",
              "c": 0,
              "x": -2.828694,
              "y": -0.4558,
              "z": -0.016493
            },
            {
              "s": "A25",
              "rep": "3",
              "c": 0,
              "x": -2.0663,
              "y": -0.0403,
              "z": 0.0641
            },
            {
              "s": "A75",
              "rep": "1",
              "c": 0,
              "x": -1.2661,
              "y": -0.0129,
              "z": -0.4063
            },
            {
              "s": "A75",
              "rep": "2",
              "c": 0,
              "x": -1.3281,
              "y": 0.1028,
              "z": -0.4084
            }
          ],
          "axes": [
            "PC1 (95.54%)",
            "PC2 (3.67%)",
            "PC3 (0.59%)"
          ]
        }
      ],
      "stats": [
        [
          "จำนวนตัวอย่าง",
          "14 replicates",
          "Asahi 100% (3), Ujitawara 100% (3), 75:25 (2), 50:50 (3), 25:75 (3)"
        ],
        [
          "Explained variance · PC1",
          "95.54%",
          ""
        ],
        [
          "Explained variance · PC2",
          "3.67%",
          ""
        ],
        [
          "Explained variance · PC3",
          "0.59%",
          ""
        ],
        [
          "Cumulative variance · PC1–PC3",
          "99.80%",
          ""
        ]
      ]
    }
  ],
  "intro": "จุด = 1 Replicate หลังเฉลี่ย Cycle 2–6 · รวม 14 replicates จาก 5 composition groups: Asahi 100%, Asahi 75:25, 50:50, 25:75 และ Ujitawara 100% · 8 sensors: G2, G3, G5, G6, G10, G11, G13, G14.",
  "caveat": "ข้อควรระวัง: Pure Asahi/Ujitawara references มาจากการวัดวันที่ 12–16 ต.ค. 2026 ส่วน Blend วัดวันที่ 20 ต.ค. 2026 ความต่างของวันวัดอาจมีผลต่อสัญญาณ (instrument/day drift) ดังนั้นการแยกกลุ่มควรตีความเป็น exploratory ไม่ใช่ยืนยันผลของสัดส่วนเพียงอย่างเดียว."
};