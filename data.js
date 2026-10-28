var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "LIVING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5435033751272584,
          "pitch": 0.09934368011160188,
          "rotation": 0,
          "target": "2-dining-view-1"
        },
        {
          "yaw": 1.9329726303015287,
          "pitch": 0.31658546694552925,
          "rotation": 0,
          "target": "1-pooja-unit"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7344258566392767,
          "pitch": 0.12280243123975865,
          "title": "MAIN DOOR",
          "text": "ENTRY"
        }
      ]
    },
    {
      "id": "1-pooja-unit",
      "name": "POOJA UNIT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.0012016522424005416,
        "pitch": 0.013626879562080418,
        "fov": 0.9972555648416127
      },
      "linkHotspots": [
        {
          "yaw": -2.6752497651472,
          "pitch": 0.04742472707976653,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": -0.42422704200333605,
          "pitch": 0.04737919955224079,
          "rotation": 0,
          "target": "2-dining-view-1"
        },
        {
          "yaw": -0.5962815226322213,
          "pitch": 0.14841902564218756,
          "rotation": 4.71238898038469,
          "target": "10-upperliving"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.156059176809844,
          "pitch": 0.081352628085682,
          "title": "MAIN DOOR",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "2-dining-view-1",
      "name": "DINING VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.014454836996701914,
        "pitch": 0.0319510036149655,
        "fov": 0.9781648182106758
      },
      "linkHotspots": [
        {
          "yaw": 0.014084334652006092,
          "pitch": 0.00755103633334997,
          "rotation": 0,
          "target": "3-dining-view-2"
        },
        {
          "yaw": 0.47688359466140895,
          "pitch": 0.08885815277050213,
          "rotation": 1.5707963267948966,
          "target": "4-kitchen"
        },
        {
          "yaw": 1.0798917778907118,
          "pitch": 0.033417057945616335,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": -0.5454254535751328,
          "pitch": 0.12043105804573884,
          "rotation": 0,
          "target": "6-gf-bedroom-1"
        },
        {
          "yaw": -1.0596111909854748,
          "pitch": 0.15951436834984634,
          "rotation": 0,
          "target": "9-gf-bedroom-2-mirror-unit"
        },
        {
          "yaw": 1.6083406367703832,
          "pitch": -0.02460137405057594,
          "rotation": 0.7853981633974483,
          "target": "10-upperliving"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining-view-2",
      "name": "DINING VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.0034151385844438664,
        "pitch": 0.013049219237608156,
        "fov": 0.9350084322569443
      },
      "linkHotspots": [
        {
          "yaw": 0.02077358259024642,
          "pitch": 0.059845855229010425,
          "rotation": 0,
          "target": "2-dining-view-1"
        },
        {
          "yaw": -0.6246642976532275,
          "pitch": 0.08894753213706252,
          "rotation": 4.71238898038469,
          "target": "0-living-room"
        },
        {
          "yaw": -1.3529001624379031,
          "pitch": 0.15027780831147375,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 0.5246904918547681,
          "pitch": 0.13211675328168582,
          "rotation": 7.853981633974483,
          "target": "9-gf-bedroom-2-mirror-unit"
        },
        {
          "yaw": 1.0204886940147322,
          "pitch": 0.14609282050833983,
          "rotation": 1.5707963267948966,
          "target": "6-gf-bedroom-1"
        },
        {
          "yaw": -0.2639049710887491,
          "pitch": -0.05423858946821447,
          "rotation": 0,
          "target": "10-upperliving"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.018828116126647032,
        "pitch": -0.0029049624859780465,
        "fov": 0.8046233259938141
      },
      "linkHotspots": [
        {
          "yaw": 2.174215210148583,
          "pitch": 0.1716361372240769,
          "rotation": 6.283185307179586,
          "target": "3-dining-view-2"
        },
        {
          "yaw": -2.8178217139432125,
          "pitch": 0.239093378514454,
          "rotation": 0,
          "target": "5-workarea"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-workarea",
      "name": "WORKAREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.1616248151885813,
        "pitch": 0.03339365337964395,
        "fov": 1.1906881248440084
      },
      "linkHotspots": [
        {
          "yaw": 1.9067883902962137,
          "pitch": 0.11155859361007892,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.1146238383877876,
          "pitch": 0.11242464904782778,
          "title": "EXIT DOOR",
          "text": "PEEK"
        }
      ]
    },
    {
      "id": "6-gf-bedroom-1",
      "name": "GF BEDROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.11221347686891114,
        "pitch": -0.003318579154337087,
        "fov": 0.9663702902538628
      },
      "linkHotspots": [
        {
          "yaw": -2.599802639319069,
          "pitch": 0.08425882502957904,
          "rotation": 1.5707963267948966,
          "target": "7-gf-bedroom-1-mirror-unit"
        },
        {
          "yaw": 0.6648247249447667,
          "pitch": 0.1150789498835394,
          "rotation": 0,
          "target": "3-dining-view-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-gf-bedroom-1-mirror-unit",
      "name": "GF BEDROOM 1 MIRROR UNIT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.141417084074081
      },
      "linkHotspots": [
        {
          "yaw": 1.6077044842602763,
          "pitch": 0.014135994677896946,
          "rotation": 0,
          "target": "6-gf-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-gf-bedroom-2-",
      "name": "GF BEDROOM 2 ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.0036183711325481482,
        "pitch": 0.036655737293585844,
        "fov": 0.6949339304859409
      },
      "linkHotspots": [
        {
          "yaw": -2.0139760569808214,
          "pitch": 0.014165249421798976,
          "rotation": 0,
          "target": "9-gf-bedroom-2-mirror-unit"
        },
        {
          "yaw": -1.5934288067650044,
          "pitch": 0.0527472029568159,
          "rotation": 0,
          "target": "2-dining-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-gf-bedroom-2-mirror-unit",
      "name": "GF BEDROOM 2 MIRROR UNIT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.00825732576212701,
        "pitch": 0.04110360902542354,
        "fov": 0.9575497159965367
      },
      "linkHotspots": [
        {
          "yaw": -1.599853176242286,
          "pitch": 0.09471372531025146,
          "rotation": 4.71238898038469,
          "target": "8-gf-bedroom-2-"
        },
        {
          "yaw": 1.4636913973476666,
          "pitch": 0.268081867665094,
          "rotation": 0,
          "target": "2-dining-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-upperliving",
      "name": "UPPERLIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.530918368772376,
        "pitch": 0.034256072994690356,
        "fov": 0.8674233803676085
      },
      "linkHotspots": [
        {
          "yaw": 1.3631748447069896,
          "pitch": 0.42637975333669154,
          "rotation": 3.141592653589793,
          "target": "2-dining-view-1"
        },
        {
          "yaw": -3.083721393503545,
          "pitch": 0.2468691350485681,
          "rotation": 0,
          "target": "12-ff-bedroom-2"
        },
        {
          "yaw": 1.860596050811786,
          "pitch": 0.21805099384944526,
          "rotation": 0,
          "target": "11-ff-bedroom-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9948855526348943,
          "pitch": 0.08621086290320079,
          "title": "OPEN TERRACE",
          "text": "PEEK"
        }
      ]
    },
    {
      "id": "11-ff-bedroom-1",
      "name": "FF BEDROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.002685457199827823,
        "pitch": 0,
        "fov": 1.2430240071232508
      },
      "linkHotspots": [
        {
          "yaw": -1.9740582515374498,
          "pitch": 0.14598680603447178,
          "rotation": 1.5707963267948966,
          "target": "10-upperliving"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-ff-bedroom-2",
      "name": "FF BEDROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.1199691531619
      },
      "linkHotspots": [
        {
          "yaw": 1.0097094324267921,
          "pitch": 0.05157144715990292,
          "rotation": 0,
          "target": "10-upperliving"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-toilet-sample",
      "name": "TOILET SAMPLE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9991154270139033
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "SUNJITH RESIDENCE",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
