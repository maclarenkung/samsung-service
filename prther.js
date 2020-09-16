"use strict";

var _ref,
  _ref2,
  _ref3,
  _ref4,
  _ref5,
  _ref6,
  _ref7,
  _ref8,
  _ref9,
  _ref10,
  _ref11,
  _ref12,
  _ref13,
  _ref14,
  _ref15,
  _ref16,
  _ref17,
  _ref18,
  _ref19,
  _ref20,
  _ref21,
  _ref22,
  _ref23,
  _ref24,
  _ref25,
  _ref26,
  _ref27,
  _ref28,
  _ref29,
  _ref30,
  _ref31,
  _ref32,
  _ref33,
  _ref34,
  _ref35,
  _ref36,
  _ref37,
  _ref38,
  _ref39,
  _ref40,
  _ref41,
  _ref42,
  _ref43,
  _ref44,
  _ref45,
  _ref46,
  _ref47,
  _ref48,
  _ref49,
  _ref50,
  _ref51,
  _ref52,
  _ref53,
  _ref54,
  _ref55,
  _ref56,
  _ref57,
  _ref58,
  _ref59;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var tagA = function tagA(url) {
  var text =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return '<a href="'
    .concat(url, '" target="_blank" >')
    .concat(text ? text : url, "</a>");
};

var modalx = [
  {
    product: 1,
    category: 1,
    model: 1,
  },
  {
    product: 2,
    category: 2,
    model: 2,
  },
  {
    product: 3,
    category: 3,
    model: 3,
  },
  {
    product: 4,
    category: 4,
    model: 4,
  },
  {
    product: 5,
    category: 5,
    model: 5,
  },
  {
    product: 6,
    category: 6,
    model: 6,
  },
  {
    product: 7,
    category: 7,
    model: 7,
  },
  {
    product: 8,
    category: 8,
    model: 8,
  },
  {
    product: 9,
    category: 9,
    model: 9,
  },
  {
    product: 10,
    category: 10,
    model: 10,
  },
  {
    product: 11,
    category: 11,
    model: 11,
  },
  {
    product: 12,
    category: 12,
    model: 12,
  },
  {
    product: 13,
    category: 13,
    model: 13,
  },
  {
    product: 14,
    category: 14,
    model: 14,
  },
  {
    product: 15,
    category: 15,
    model: 15,
  },
  {
    product: 16,
    category: 16,
    model: 16,
  },
  {
    product: 17,
    category: 17,
    model: 17,
  },
  {
    product: 18,
    category: 18,
    model: 18,
  },
  {
    product: 19,
    category: 19,
    model: 19,
  },
  {
    product: 20,
    category: 20,
    model: 20,
  },
  {
    product: 21,
    category: 21,
    model: 21,
  },
  {
    product: 22,
    category: 22,
    model: 22,
  },
  {
    product: 23,
    category: 23,
    model: 23,
  },
  {
    product: 24,
    category: 24,
    model: 24,
  },
  {
    product: 25,
    category: 25,
    model: 25,
  },
  {
    product: 26,
    category: 26,
    model: 26,
  },
  {
    product: 27,
    category: 27,
    model: 27,
  },
  {
    product: 28,
    category: 28,
    model: 28,
  },
  {
    product: 29,
    category: 29,
    model: 29,
  },
  {
    product: 30,
    category: 30,
    model: 30,
  },
  {
    product: 31,
    category: 31,
    model: 31,
  },
  {
    product: 32,
    category: 32,
    model: 32,
  },
  {
    product: 33,
    category: 33,
    model: 33,
  },
  {
    product: 34,
    category: 34,
    model: 34,
  },
  {
    product: 35,
    category: 35,
    model: 35,
  },
  {
    product: 36,
    category: 36,
    model: 36,
  },
  {
    product: 37,
    category: 37,
    model: 37,
  },
  {
    product: 38,
    category: 38,
    model: 38,
  },
  {
    product: 39,
    category: 39,
    model: 39,
  },
];
var products = [
  {
    key: 1,
    name: "ทีวี",
  },
  {
    key: 2,
    name: "ทีวี",
  },
  {
    key: 3,
    name: "ทีวี",
  },
  {
    key: 4,
    name: "ทีวี",
  },
  {
    key: 5,
    name: "ทีวี",
  },
  {
    key: 6,
    name: "ทีวี",
  },
  {
    key: 7,
    name: "ทีวี",
  },
  {
    key: 8,
    name: "ทีวี",
  },
  {
    key: 9,
    name: "ทีวี",
  },
  {
    key: 10,
    name: "ทีวี",
  },
  {
    key: 11,
    name: "ทีวี",
  },
  {
    key: 12,
    name: "ทีวี",
  },
  {
    key: 13,
    name: "ทีวี",
  },
  {
    key: 14,
    name: "ทีวี",
  },
  {
    key: 15,
    name: "ทีวี",
  },
  {
    key: 16,
    name: "ทีวี",
  },
  {
    key: 17,
    name: "ทีวี",
  },
  {
    key: 18,
    name: "ทีวี",
  },
  {
    key: 19,
    name: "ทีวี",
  },
  {
    key: 20,
    name: "ทีวี",
  },
  {
    key: 21,
    name: "ทีวี",
  },
  {
    key: 22,
    name: "ทีวี",
  },
  {
    key: 23,
    name: "ทีวี",
  },
  {
    key: 24,
    name: "ทีวี",
  },
  {
    key: 25,
    name: "ทีวี",
  },
  {
    key: 26,
    name: "ทีวี",
  },
  {
    key: 27,
    name: "ทีวี",
  },
  {
    key: 28,
    name: "ทีวี",
  },
  {
    key: 29,
    name: "ทีวี",
  },
  {
    key: 30,
    name: "ทีวี",
  },
  {
    key: 31,
    name: "ทีวี",
  },
  {
    key: 32,
    name: "ทีวี",
  },
  {
    key: 33,
    name: "ทีวี",
  },
  {
    key: 34,
    name: "ทีวี",
  },
  {
    key: 35,
    name: "ทีวี",
  },
  {
    key: 36,
    name: "ทีวี",
  },
  {
    key: 37,
    name: "ตู้เย็น",
  },
  {
    key: 38,
    name: "ตู้เย็น",
  },
  {
    key: 39,
    name: "เครื่องทำความสะอาดและรีดผ้า",
  },
];
var categories = [
  {
    key: 1,
    name: "Q950TS QLED 8K (2020)",
  },
  {
    key: 2,
    name: "Q950TS QLED 8K (2020)",
  },
  {
    key: 3,
    name: "Q950TS QLED 8K (2020)",
  },
  {
    key: 4,
    name: "Q800T QLED 8K (2020)",
  },
  {
    key: 5,
    name: "Q800T QLED 8K (2020)",
  },
  {
    key: 6,
    name: "Q800T QLED 8K (2020)",
  },
  {
    key: 7,
    name: "Q900R QLED 8K (2019)",
  },
  {
    key: 8,
    name: "Q900R QLED 8K (2019)",
  },
  {
    key: 9,
    name: "Q900R QLED 8K (2019)",
  },
  {
    key: 10,
    name: "Q900R QLED 8K (2019)",
  },
  {
    key: 11,
    name: "Q900R QLED 8K (2019)",
  },
  {
    key: 12,
    name: "Q80T QLED 4K (2020)",
  },
  {
    key: 13,
    name: "Q80T QLED 4K (2020)",
  },
  {
    key: 14,
    name: "Q80T QLED 4K (2020)",
  },
  {
    key: 15,
    name: "Q80T QLED 4K (2020)",
  },
  {
    key: 16,
    name: "Q95T QLED 4K (2020)",
  },
  {
    key: 17,
    name: "Q95T QLED 4K (2020)",
  },
  {
    key: 18,
    name: "Q70T QLED 4K (2020)",
  },
  {
    key: 19,
    name: "Q70T QLED 4K (2020)",
  },
  {
    key: 20,
    name: "Q70T QLED 4K (2020)",
  },
  {
    key: 21,
    name: "Q70T QLED 4K (2020)",
  },
  {
    key: 22,
    name: "Q65T QLED 4K (2020)",
  },
  {
    key: 23,
    name: "Q65T QLED 4K (2020)",
  },
  {
    key: 24,
    name: "Q60T QLED 4K (2020)",
  },
  {
    key: 25,
    name: "Q60T QLED 4K (2020)",
  },
  {
    key: 26,
    name: "Q60T QLED 4K (2020)",
  },
  {
    key: 27,
    name: "Q60T QLED 4K (2020)",
  },
  {
    key: 28,
    name: "Q60T QLED 4K (2020)",
  },
  {
    key: 29,
    name: "Q60T QLED 4K (2020)",
  },
  {
    key: 30,
    name: "Q60T QLED 4K (2020)",
  },
  {
    key: 31,
    name: "The Frame Smart 4K (2020)",
  },
  {
    key: 32,
    name: "The Frame Smart 4K (2020)",
  },
  {
    key: 33,
    name: "The Frame Smart 4K (2020)",
  },
  {
    key: 34,
    name: "The Serif 4K Smart TV (2020)",
  },
  {
    key: 35,
    name: "The Serif 4K Smart TV (2020)",
  },
  {
    key: 36,
    name: "The Serif 4K Smart TV (2020)",
  },
  {
    key: 37,
    name: "Family Hub",
  },
  {
    key: 38,
    name: "Family Hub",
  },
  {
    key: 38,
    name: "AirDresser",
  },
];
var models = [
  {
    key: 1,
    name: "QA65Q950TSKXXT",
  },
  {
    key: 2,
    name: "QA75Q950TSKXXT",
  },
  {
    key: 3,
    name: "QA85Q950TSKXXT",
  },
  {
    key: 4,
    name: "QA65Q800TAKXXT",
  },
  {
    key: 5,
    name: "QA75Q800TAKXXT",
  },
  {
    key: 6,
    name: "QA82Q800TAKXXT",
  },
  {
    key: 7,
    name: "QA55Q900RBKXXT",
  },
  {
    key: 8,
    name: "QA65Q900RBKXXT",
  },
  {
    key: 9,
    name: "QA75Q900RBKXXT",
  },
  {
    key: 10,
    name: "QA82Q900RBKXXT",
  },
  {
    key: 11,
    name: "QA98Q900RBKXXT",
  },
  {
    key: 12,
    name: "QA55Q80TAKXXT",
  },
  {
    key: 13,
    name: "QA65Q80TAKXXT",
  },
  {
    key: 14,
    name: "QA75Q80TAKXXT",
  },
  {
    key: 15,
    name: "QA85Q80TAKXXT",
  },
  {
    key: 16,
    name: "QA65Q95TAKXXT",
  },
  {
    key: 17,
    name: "QA75Q95TAKXXT",
  },
  {
    key: 18,
    name: "QA55Q70TAKXXT",
  },
  {
    key: 19,
    name: "QA65Q70TAKXXT",
  },
  {
    key: 20,
    name: "QA75Q70TAKXXT",
  },
  {
    key: 21,
    name: "QA85Q70TAKXXT",
  },
  {
    key: 22,
    name: "QA55Q65TAKXXT",
  },
  {
    key: 23,
    name: "QA65Q65TAKXXT",
  },
  {
    key: 24,
    name: "QA43Q60TAKXXT",
  },
  {
    key: 25,
    name: "QA50Q60TAKXXT",
  },
  {
    key: 26,
    name: "QA55Q60TAKXXT",
  },
  {
    key: 27,
    name: "QA58Q60TAKXXT",
  },
  {
    key: 28,
    name: "QA65Q60TAKXXT",
  },
  {
    key: 29,
    name: "QA75Q60TAKXXT",
  },
  {
    key: 30,
    name: "QA85Q60TAKXXT",
  },
  {
    key: 31,
    name: "QA32LS03TBKXXT",
  },
  {
    key: 32,
    name: "QA55LS03TAKXXT",
  },
  {
    key: 33,
    name: "QA65LS03TAKXXT",
  },
  {
    key: 34,
    name: "QA43LS01TAKXXT",
  },
  {
    key: 35,
    name: "QA55LS01TAKXXT",
  },
  {
    key: 36,
    name: "QA43LS05TAKXXT",
  },
  {
    key: 37,
    name: "RF56N9740SG/ST ",
  },
  {
    key: 38,
    name: "RS64T5F01B4/ST",
  },
  {
    key: 39,
    name: "DF60R8600CG/ST",
  },
];
var items = {
  mobile: {
    Unbox: [
      {
        no: "01",
        head: "-",
        text: "-",
        image: "unbox-01_01",
        image2: "unbox-mb-01_01",
        title: "แกะกล่องเครื่องใหม่",
      },
      {
        no: "02",
        head: "-",
        text: "-",
        image: "unbox-01_02",
        image2: "unbox-mb-01_02",
        title: "At Your Service",
        mapName: "at-service",
        condition:
          "การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง At Your Service เพื่อเป็นข้อมูล ประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
        imageLinks: [
          {
            name: "serviceat",
            url: "https://www.samsung.com/th/support/your-service/main",
          },
        ],
      },
      {
        no: "03",
        head: "-",
        text: "-",
        image: "unbox-01_03",
        image2: "unbox-mb-01_03",
        title: "Samsung Members",
        condition:
          "การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง Samsung Members เพื่อเป็นข้อมูลประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
      }, // {
      //   no: "04",
      //   head: "-",
      //   text: "-",
      //   image: "unbox-01_04",
      //   image2: "unbox-mb-01_04",
      //   url: "serice-btn",
      //   title: "Extended Warranty",
      //   condition:
      //     "1. ลูกค้าต้องลงทะเบียนผ่านเว็บไซต์ SSTHWARRANTY  เพื่อเอาประกันเท่านั้น <br> 2. ระยะเวลาที่ขยายการรับประกันสินค้า ขึ้นอยู่กับรุ่นของสินค้าและโปรโมชั่นขณะนั้น <br> 3. การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง Samsung Members เพื่อเป็นข้อมูลประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
      // },
    ],
    Inquiry: [
      {
        no: "04",
        head: "-",
        text: "-",
        image: "unbox-02_01",
        image2: "unbox-mb-02_01",
        title: "เครื่องใหม่ ยังไม่ชิน / ต้องการแก้ไขปัญหาเริ่มต้น? ",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "unbox-02_02",
        image2: "unbox-mb-02_02",
        title: "1282 Call Center",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "unbox-02_03",
        image2: "unbox-mb-02_03",
        title: "Live Chat",
        mapName: "livechat",
        imageLinks: [
          {
            name: "livechat",
            url:
              "https://livechat.support.samsung.com/Customer_mys/CustomerChat_mys.aspx?roomNo=29352510&amp;encrypt=DA7538FE760DCE56801E33CA5AC8840F",
          },
        ],
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "unbox-02_04_mb",
        image2: "unbox-mb-02_04",
        title: "Remote Service",
      }, // {
      //   no: "05",
      //   head: "-",
      //   text: "-",
      //   image: "unbox-02_05",
      //   image2: "unbox-mb-02_05",
      //   title: "Visual Support",
      // },
      // {
      //   no: "05",
      //   head: "-",
      //   text: "-",
      //   image: "unbox-02_06",
      //   image2: "unbox-mb-02_05",
      //   title: "Private Demo Service",
      //   condition:
      //     "1. ลูกค้าสามารถติดต่อขอใช้บริการได้ภายใน 90 วัน นับจากวันที่ลูกค้าซื้อสินค้า โดยอ้างอิงจากใบเสร็จ <br> 2.ลูกค้าต้องเตรียมหลักฐานประกอบการรับบริการ เช่น ใบเสร็จของสินค้าหรือใบรับของจากร้านค้าที่ซื้อมา โดยมีรายละเอียดของผู้ซื้อ ผู้ขายรวมถึงรุ่นของสินค้าที่ซื้อมาอย่างชัดเจน <br> 3.บริการสาธิตการใช้งานผลิตภัณฑ์สำหรับตู้เย็นชนิด Family Hub และ AirDresser ในรุ่นที่กำหนด ให้บริการเฉพาะพื้นที่กรุงเทพฯ และปริมณฑลเท่านั้น",
      //   modalName: "md-1",
      //   modalTitle: "Test by arm",
      //   modalType: "search",
      //   modal: [
      //     {
      //       product: 1,
      //       category: 1,
      //       model: 1,
      //     },
      //     {
      //       product: 2,
      //       category: 1,
      //       model: 1,
      //     },
      //     {
      //       product: 1,
      //       category: 1,
      //       model: 1,
      //     },
      //   ],
      // },
      // {
      //   no: "05",
      //   head: "-",
      //   text: "-",
      //   image: "unbox-02_07",
      //   image2: "unbox-mb-02_05",
      //   title: "e-Demo Service",
      // },
    ],
    Repair: [
      {
        no: "04",
        head: "-",
        text: "-",
        image: "unbox-03_01",
        image2: "unbox-mb-03_01",
        title: "พบช่องทางที่หลากหลายในการแจ้งซ่อมผลิตภัณฑ์",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "unbox-03_02",
        image2: "unbox-mb-03_02",
        title: "1282 Call Center",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "unbox-03_03",
        image2: "unbox-mb-03_03",
        title: "At Your Service",
        mapName: "atservice",
        imageLinks: [
          {
            name: "atservice",
            url: "https://www.samsung.com/th/support/your-service/main",
          },
        ],
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "unbox-03_04",
        image2: "unbox-mb-03_04",
        title: "Samsung Members",
        condition: "แอปพลิเคชันนี้รองรับเฉพาะโทรศัพท์ซัมซุงเท่านั้น",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "unbox-03_05",
        image2: "unbox-mb-03_05",
        title: "Live Chat",
      }, // {
      //   no: "05",
      //   head: "-",
      //   text: "-",
      //   image: "unbox-03_06",
      //   image2: "unbox-mb-02_06",
      //   title: "For Home appliance",
      //   condition:
      //     "บริการนี้สำหรับเครื่องใช้ไฟฟ้าประเภทตู้เย็น เครื่องซักผ้า เครื่องปรับอากาศ และทีวีขนาด 32 นิ้วขึ้นไปเท่านั้น ",
      // },
    ],
    Extra: [
      {
        no: "04",
        head: "-",
        text: "-",
        image: "unbox-04_02",
        image2: "unbox-mb-04_02",
        title: "Extra benefit ",
        condition: "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21\u0E17\u0E35\u0E48 ".concat(
          tagA("https://www.samsung.com/th/butler"),
          " "
        ),
        mapName: "extra",
        imageLinks: [
          {
            name: "extra",
            url: "https://www.samsung.com/th/butler/",
          },
        ],
      },
    ],
  },
  tv: {
    Unbox: [
      {
        no: "01",
        head: "-",
        text: "-",
        image: "unbox-01_01",
        image2: "unbox-mb-01_01",
        title: "แกะกล่องเครื่องใหม่",
      },
      {
        no: "02",
        head: "-",
        text: "-",
        image: "unbox-01_02",
        image2: "unbox-mb-01_02",
        title: "At Your Service",
        condition:
          "การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง At Your Service เพื่อเป็นข้อมูล ประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
        imageLinks: [
          {
            name: "serviceat",
            url: "https://www.samsung.com/th/support/your-service/main",
          },
        ],
      },
      {
        no: "03",
        head: "-",
        text: "-",
        image: "unbox-01_03",
        image2: "unbox-mb-01_03",
        title: "Samsung Members",
        condition:
          "การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง Samsung Members เพื่อเป็นข้อมูลประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
      },
      {
        no: "04",
        head: "-",
        text: "-",
        image: "unbox-01_04",
        image2: "unbox-mb-01_04",
        url: "serice-btn",
        title: "Extended Warranty",
        mapName: "warranty",
        condition:
          "1. ลูกค้าต้องลงทะเบียนผ่านเว็บไซต์ SSTHWARRANTY  เพื่อเอาประกันเท่านั้น <br> 2. ระยะเวลาที่ขยายการรับประกันสินค้า ขึ้นอยู่กับรุ่นของสินค้าและโปรโมชั่นขณะนั้น <br> 3. การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง Samsung Members เพื่อเป็นข้อมูลประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
        imageLinks: [
          {
            name: "warranty",
            url: "https://www.ssthwarranty.com/warranty",
          },
        ],
      },
    ],
    Inquiry: [
      {
        no: "04",
        head: "-",
        text: "-",
        image: "unbox-02_01",
        image2: "unbox-mb-02_01",
        title: "เครื่องใหม่ ยังไม่ชิน / ต้องการแก้ไขปัญหาเริ่มต้น? ",
      },
      ((_ref = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref, "image", "unbox-02_02"),
      _defineProperty(_ref, "image2", "unbox-mb-02_02"),
      _defineProperty(_ref, "title", "1282 Call Center"),
      _ref),
      ((_ref2 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref2, "image", "unbox-02_03"),
      _defineProperty(_ref2, "image2", "unbox-mb-02_03"),
      _defineProperty(_ref2, "title", "Live Chat"),
      _defineProperty(_ref2, "mapName", "livechat"),
      _defineProperty(_ref2, "imageLinks", [
        {
          name: "livechat",
          url:
            "https://livechat.support.samsung.com/Customer_mys/CustomerChat_mys.aspx?roomNo=29352510&amp;encrypt=DA7538FE760DCE56801E33CA5AC8840F",
        },
      ]),
      _ref2),
      ((_ref3 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref3, "image", "unbox-02_04"),
      _defineProperty(_ref3, "image2", "unbox-mb-02_04"),
      _defineProperty(_ref3, "title", "Remote Service"),
      _ref3),
      ((_ref4 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref4, "image", "unbox-02_05"),
      _defineProperty(_ref4, "image2", "unbox-mb-02_visual"),
      _defineProperty(_ref4, "title", "Visual Support"),
      _ref4),
      ((_ref5 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref5, "image", "unbox-02_06"),
      _defineProperty(_ref5, "image2", "unbox-mb-02_05"),
      _defineProperty(_ref5, "title", "Private Demo Service"),
      _defineProperty(
        _ref5,
        "condition",
        "1. ลูกค้าสามารถติดต่อขอใช้บริการได้ภายใน 90 วัน นับจากวันที่ลูกค้าซื้อสินค้า โดยอ้างอิงจากใบเสร็จ <br> 2.ลูกค้าต้องเตรียมหลักฐานประกอบการรับบริการ เช่น ใบเสร็จของสินค้าหรือใบรับของจากร้านค้าที่ซื้อมา โดยมีรายละเอียดของผู้ซื้อ ผู้ขายรวมถึงรุ่นของสินค้าที่ซื้อมาอย่างชัดเจน <br> 3.บริการสาธิตการใช้งานผลิตภัณฑ์สำหรับตู้เย็นชนิด Family Hub และ AirDresser ในรุ่นที่กำหนด ให้บริการเฉพาะพื้นที่กรุงเทพฯ และปริมณฑลเท่านั้น"
      ),
      _defineProperty(_ref5, "modalType", "search"),
      _defineProperty(_ref5, "modalName", "private-service"),
      _defineProperty(_ref5, "modal", modalx),
      _ref5),
    ],
    Repair: [
      {
        no: "04",
        head: "-",
        text: "-",
        image: "unbox-03_01",
        image2: "unbox-mb-03_01",
        title: "พบช่องทางที่หลากหลายในการแจ้งซ่อมผลิตภัณฑ์",
      },
      ((_ref6 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref6, "image", "unbox-03_02"),
      _defineProperty(_ref6, "image2", "unbox-mb-03_02"),
      _defineProperty(_ref6, "title", "1282 Call Center"),
      _ref6),
      ((_ref7 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref7, "image", "unbox-03_03"),
      _defineProperty(_ref7, "image2", "unbox-mb-03_03"),
      _defineProperty(_ref7, "title", "At Your Service"),
      _defineProperty(_ref7, "mapName", "atservice"),
      _defineProperty(_ref7, "imageLinks", [
        {
          name: "atservice",
          url: "https://www.samsung.com/th/support/your-service/main",
        },
      ]),
      _ref7),
      ((_ref8 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref8, "image", "unbox-03_04"),
      _defineProperty(_ref8, "image2", "unbox-mb-03_04"),
      _defineProperty(_ref8, "title", "Samsung Members"),
      _defineProperty(
        _ref8,
        "condition",
        "แอปพลิเคชันนี้รองรับเฉพาะโทรศัพท์ซัมซุงเท่านั้น"
      ),
      _ref8),
      ((_ref9 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref9, "image", "unbox-03_05"),
      _defineProperty(_ref9, "image2", "unbox-mb-03_05"),
      _defineProperty(_ref9, "title", "Live Chat"),
      _ref9),
      ((_ref10 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref10, "image", "unbox-03_06"),
      _defineProperty(_ref10, "image2", "unbox-mb-03_06"),
      _defineProperty(_ref10, "title", "For Home appliance"),
      _defineProperty(
        _ref10,
        "condition",
        "บริการนี้สำหรับเครื่องใช้ไฟฟ้าประเภทตู้เย็น เครื่องซักผ้า เครื่องปรับอากาศ และทีวีขนาด 32 นิ้วขึ้นไปเท่านั้น "
      ),
      _ref10),
    ],
    Extra: [
      ((_ref11 = {
        no: "04",
        head: "-",
        text: "-",
        image: "unbox-04_01",
        image2: "unbox-mb-04_01",
        title: " ",
      }),
      _defineProperty(_ref11, "title", "Extra benefit "),
      _defineProperty(
        _ref11,
        "condition",
        "เมื่อซื้อ Samsung Smart TV รุ่นปี 2020 และลงทะเบียนรับสิทธิ์ระหว่างวันที่ 1 ส.ค. 63 – 31 ต.ค. 63"
      ),
      _ref11),
    ],
  },
  wm: {
    Unbox: [
      {
        no: "01",
        head: "-",
        text: "-",
        image: "unbox-01_01",
        image2: "unbox-mb-01_01",
        title: "แกะกล่องเครื่องใหม่",
      },
      {
        no: "02",
        head: "-",
        text: "-",
        image: "unbox-01_02",
        image2: "unbox-mb-01_02",
        title: "At Your Service",
        condition:
          "การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง At Your Service เพื่อเป็นข้อมูล ประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
        imageLinks: [
          {
            name: "serviceat",
            url: "https://www.samsung.com/th/support/your-service/main",
          },
        ],
      },
      {
        no: "03",
        head: "-",
        text: "-",
        image: "unbox-01_03",
        image2: "unbox-mb-01_03",
        title: "Samsung Members",
        condition:
          "การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง Samsung Members เพื่อเป็นข้อมูลประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
      },
      {
        no: "04",
        head: "-",
        text: "-",
        image: "unbox-01_04",
        image2: "unbox-mb-01_04",
        url: "serice-btn",
        title: "Extended Warranty",
        mapName: "warranty",
        condition:
          "1. ลูกค้าต้องลงทะเบียนผ่านเว็บไซต์ SSTHWARRANTY  เพื่อเอาประกันเท่านั้น <br> 2. ระยะเวลาที่ขยายการรับประกันสินค้า ขึ้นอยู่กับรุ่นของสินค้าและโปรโมชั่นขณะนั้น <br> 3. การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง Samsung Members เพื่อเป็นข้อมูลประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
        imageLinks: [
          {
            name: "warranty",
            url: "https://www.ssthwarranty.com/warranty",
          },
        ],
      },
    ],
    Inquiry: [
      {
        no: "04",
        head: "-",
        text: "-",
        image: "unbox-02_01",
        image2: "unbox-mb-02_01",
        title: "เครื่องใหม่ ยังไม่ชิน / ต้องการแก้ไขปัญหาเริ่มต้น? ",
      },
      ((_ref12 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref12, "image", "unbox-02_02"),
      _defineProperty(_ref12, "image2", "unbox-mb-02_02"),
      _defineProperty(_ref12, "title", "1282 Call Center"),
      _ref12),
      ((_ref13 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref13, "image", "unbox-02_03"),
      _defineProperty(_ref13, "image2", "unbox-mb-02_03"),
      _defineProperty(_ref13, "title", "Live Chat"),
      _defineProperty(_ref13, "mapName", "livechat"),
      _defineProperty(_ref13, "imageLinks", [
        {
          name: "livechat",
          url:
            "https://livechat.support.samsung.com/Customer_mys/CustomerChat_mys.aspx?roomNo=29352510&amp;encrypt=DA7538FE760DCE56801E33CA5AC8840F",
        },
      ]),
      _ref13),
      ((_ref14 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref14, "image", "unbox-02_05"),
      _defineProperty(_ref14, "image2", "unbox-mb-02_05"),
      _defineProperty(_ref14, "title", "Visual Support"),
      _ref14),
      {
        no: "05",
        head: "-",
        text: "-",
        image: "unbox-02_07",
        image2: "unbox-mb-02_06",
        title: "e-Demo Service",
        mapName: "digital-e-domo-service",
      },
    ],
    Repair: [
      {
        no: "04",
        head: "-",
        text: "-",
        image: "unbox-03_01",
        image2: "unbox-mb-03_01",
        title: "พบช่องทางที่หลากหลายในการแจ้งซ่อมผลิตภัณฑ์",
      },
      ((_ref15 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref15, "image", "unbox-03_02"),
      _defineProperty(_ref15, "image2", "unbox-mb-03_02"),
      _defineProperty(_ref15, "title", "1282 Call Center"),
      _ref15),
      ((_ref16 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref16, "image", "unbox-03_03"),
      _defineProperty(_ref16, "image2", "unbox-mb-03_03"),
      _defineProperty(_ref16, "title", "At Your Service"),
      _defineProperty(_ref16, "mapName", "atservice"),
      _defineProperty(_ref16, "imageLinks", [
        {
          name: "atservice",
          url: "https://www.samsung.com/th/support/your-service/main",
        },
      ]),
      _ref16),
      ((_ref17 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref17, "image", "unbox-03_04"),
      _defineProperty(_ref17, "image2", "unbox-mb-03_04"),
      _defineProperty(_ref17, "title", "Samsung Members"),
      _defineProperty(
        _ref17,
        "condition",
        "แอปพลิเคชันนี้รองรับเฉพาะโทรศัพท์ซัมซุงเท่านั้น"
      ),
      _ref17),
      ((_ref18 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref18, "image", "unbox-03_05"),
      _defineProperty(_ref18, "image2", "unbox-mb-03_05"),
      _defineProperty(_ref18, "title", "Live Chat"),
      _ref18),
      ((_ref19 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref19, "image", "unbox-03_06"),
      _defineProperty(_ref19, "image2", "unbox-mb-03_06"),
      _defineProperty(_ref19, "title", "For Home appliance"),
      _defineProperty(
        _ref19,
        "condition",
        "บริการนี้สำหรับเครื่องใช้ไฟฟ้าประเภทตู้เย็น เครื่องซักผ้า เครื่องปรับอากาศ และทีวีขนาด 32 นิ้วขึ้นไปเท่านั้น "
      ),
      _ref19),
    ],
  },
  cloth: {
    Unbox: [
      {
        no: "01",
        head: "-",
        text: "-",
        image: "unbox-01_01",
        image2: "unbox-mb-01_01",
        title: "แกะกล่องเครื่องใหม่",
      },
      {
        no: "02",
        head: "-",
        text: "-",
        image: "unbox-01_02",
        image2: "unbox-mb-01_02",
        title: "At Your Service",
        condition:
          "การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง At Your Service เพื่อเป็นข้อมูล ประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
        imageLinks: [
          {
            name: "serviceat",
            url: "https://www.samsung.com/th/support/your-service/main",
          },
        ],
      },
      {
        no: "03",
        head: "-",
        text: "-",
        image: "unbox-01_03",
        image2: "unbox-mb-01_03",
        title: "Samsung Members",
        condition:
          "การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง Samsung Members เพื่อเป็นข้อมูลประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
      }, // {
      //   no: "04",
      //   head: "-",
      //   text: "-",
      //   image: "unbox-01_04",
      //   image2: "unbox-mb-01_04",
      //   url: "serice-btn",
      //   title: "Extended Warranty",
      //   condition:
      //     "1. ลูกค้าต้องลงทะเบียนผ่านเว็บไซต์ SSTHWARRANTY  เพื่อเอาประกันเท่านั้น <br> 2. ระยะเวลาที่ขยายการรับประกันสินค้า ขึ้นอยู่กับรุ่นของสินค้าและโปรโมชั่นขณะนั้น <br> 3. การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง Samsung Members เพื่อเป็นข้อมูลประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
      // },
    ],
    Inquiry: [
      {
        no: "04",
        head: "-",
        text: "-",
        image: "unbox-02_01",
        image2: "unbox-mb-02_01",
        title: "เครื่องใหม่ ยังไม่ชิน / ต้องการแก้ไขปัญหาเริ่มต้น? ",
      },
      ((_ref20 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref20, "image", "unbox-02_02"),
      _defineProperty(_ref20, "image2", "unbox-mb-02_02"),
      _defineProperty(_ref20, "title", "1282 Call Center"),
      _ref20),
      ((_ref21 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref21, "image", "unbox-02_03"),
      _defineProperty(_ref21, "image2", "unbox-mb-02_03"),
      _defineProperty(_ref21, "title", "Live Chat"),
      _defineProperty(_ref21, "mapName", "livechat"),
      _defineProperty(_ref21, "imageLinks", [
        {
          name: "livechat",
          url:
            "https://livechat.support.samsung.com/Customer_mys/CustomerChat_mys.aspx?roomNo=29352510&amp;encrypt=DA7538FE760DCE56801E33CA5AC8840F",
        },
      ]),
      _ref21),
      ((_ref22 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref22, "image", "unbox-02_05"),
      _defineProperty(_ref22, "image2", "unbox-mb-02_visual"),
      _defineProperty(_ref22, "title", "Visual Support"),
      _ref22),
      ((_ref23 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref23, "image", "unbox-02_05"),
      _defineProperty(_ref23, "image2", "unbox-mb-02_05"),
      _defineProperty(_ref23, "title", "Private Demo Service"),
      _defineProperty(_ref23, "modalName", "e-demo"),
      _defineProperty(
        _ref23,
        "condition",
        "1. ลูกค้าสามารถติดต่อขอใช้บริการได้ภายใน 90 วัน นับจากวันที่ลูกค้าซื้อสินค้า โดยอ้างอิงจากใบเสร็จ <br> 2.ลูกค้าต้องเตรียมหลักฐานประกอบการรับบริการ เช่น ใบเสร็จของสินค้าหรือใบรับของจากร้านค้าที่ซื้อมา โดยมีรายละเอียดของผู้ซื้อ ผู้ขายรวมถึงรุ่นของสินค้าที่ซื้อมาอย่างชัดเจน <br> 3.บริการสาธิตการใช้งานผลิตภัณฑ์สำหรับตู้เย็นชนิด Family Hub และ AirDresser ในรุ่นที่กำหนด ให้บริการเฉพาะพื้นที่กรุงเทพฯ และปริมณฑลเท่านั้น"
      ),
      _defineProperty(_ref23, "modalType", "search"),
      _defineProperty(_ref23, "modal", [
        {
          product: 1,
          category: 1,
          model: 1,
        },
        {
          product: 2,
          category: 1,
          model: 1,
        },
        {
          product: 1,
          category: 1,
          model: 1,
        },
      ]),
      _ref23),
      {
        no: "05",
        head: "-",
        text: "-",
        image: "unbox-02_07",
        image2: "unbox-mb-02_06",
        title: "e-Demo Service",
      },
    ],
    Repair: [
      {
        no: "04",
        head: "-",
        text: "-",
        image: "unbox-03_01",
        image2: "unbox-mb-03_01",
        title: "พบช่องทางที่หลากหลายในการแจ้งซ่อมผลิตภัณฑ์",
      },
      ((_ref24 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref24, "image", "unbox-03_02"),
      _defineProperty(_ref24, "image2", "unbox-mb-03_02"),
      _defineProperty(_ref24, "title", "1282 Call Center"),
      _ref24),
      ((_ref25 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref25, "image", "unbox-03_03"),
      _defineProperty(_ref25, "image2", "unbox-mb-03_03"),
      _defineProperty(_ref25, "title", "At Your Service"),
      _defineProperty(_ref25, "mapName", "atservice"),
      _defineProperty(_ref25, "imageLinks", [
        {
          name: "atservice",
          url: "https://www.samsung.com/th/support/your-service/main",
        },
      ]),
      _ref25),
      ((_ref26 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref26, "image", "unbox-03_04"),
      _defineProperty(_ref26, "image2", "unbox-mb-03_04"),
      _defineProperty(_ref26, "title", "Samsung Members"),
      _defineProperty(
        _ref26,
        "condition",
        "แอปพลิเคชันนี้รองรับเฉพาะโทรศัพท์ซัมซุงเท่านั้น"
      ),
      _ref26),
      ((_ref27 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref27, "image", "unbox-03_05"),
      _defineProperty(_ref27, "image2", "unbox-mb-03_05"),
      _defineProperty(_ref27, "title", "Live Chat"),
      _ref27),
      ((_ref28 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref28, "image", "unbox-03_06"),
      _defineProperty(_ref28, "image2", "unbox-mb-03_06"),
      _defineProperty(_ref28, "title", "For Home appliance"),
      _defineProperty(
        _ref28,
        "condition",
        "บริการนี้สำหรับเครื่องใช้ไฟฟ้าประเภทตู้เย็น เครื่องซักผ้า เครื่องปรับอากาศ และทีวีขนาด 32 นิ้วขึ้นไปเท่านั้น "
      ),
      _ref28),
    ],
  },
  refrig: {
    Unbox: [
      {
        no: "01",
        head: "-",
        text: "-",
        image: "unbox-01_01",
        image2: "unbox-mb-01_01",
        title: "แกะกล่องเครื่องใหม่",
      },
      {
        no: "02",
        head: "-",
        text: "-",
        image: "unbox-01_02",
        image2: "unbox-mb-01_02",
        title: "At Your Service",
        condition:
          "การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง At Your Service เพื่อเป็นข้อมูล ประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
        imageLinks: [
          {
            name: "serviceat",
            url: "https://www.samsung.com/th/support/your-service/main",
          },
        ],
      },
      {
        no: "03",
        head: "-",
        text: "-",
        image: "unbox-01_03",
        image2: "unbox-mb-01_03",
        title: "Samsung Members",
        condition:
          "การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง Samsung Members เพื่อเป็นข้อมูลประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
      },
      {
        no: "04",
        head: "-",
        text: "-",
        image: "unbox-01_04",
        image2: "unbox-mb-01_04",
        url: "serice-btn",
        title: "Extended Warranty",
        mapName: "warranty",
        condition:
          "1. ลูกค้าต้องลงทะเบียนผ่านเว็บไซต์ SSTHWARRANTY  เพื่อเอาประกันเท่านั้น <br> 2. ระยะเวลาที่ขยายการรับประกันสินค้า ขึ้นอยู่กับรุ่นของสินค้าและโปรโมชั่นขณะนั้น <br> 3. การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง Samsung Members เพื่อเป็นข้อมูลประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
        imageLinks: [
          {
            name: "warranty",
            url: "https://www.ssthwarranty.com/warranty",
          },
        ],
      },
    ],
    Inquiry: [
      {
        no: "04",
        head: "-",
        text: "-",
        image: "unbox-02_01",
        image2: "unbox-mb-02_01",
        title: "เครื่องใหม่ ยังไม่ชิน / ต้องการแก้ไขปัญหาเริ่มต้น? ",
      },
      ((_ref29 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref29, "image", "unbox-02_02"),
      _defineProperty(_ref29, "image2", "unbox-mb-02_02"),
      _defineProperty(_ref29, "title", "1282 Call Center"),
      _ref29),
      ((_ref30 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref30, "image", "unbox-02_03"),
      _defineProperty(_ref30, "image2", "unbox-mb-02_03"),
      _defineProperty(_ref30, "title", "Live Chat"),
      _defineProperty(_ref30, "mapName", "livechat"),
      _defineProperty(_ref30, "imageLinks", [
        {
          name: "livechat",
          url:
            "https://livechat.support.samsung.com/Customer_mys/CustomerChat_mys.aspx?roomNo=29352510&amp;encrypt=DA7538FE760DCE56801E33CA5AC8840F",
        },
      ]),
      _ref30),
      ((_ref31 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref31, "image", "unbox-02_05"),
      _defineProperty(_ref31, "image2", "unbox-mb-02_visual"),
      _defineProperty(_ref31, "title", "Visual Support"),
      _ref31),
      ((_ref32 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref32, "image", "unbox-02_05"),
      _defineProperty(_ref32, "image2", "unbox-mb-02_05"),
      _defineProperty(_ref32, "title", "Private Demo Service"),
      _defineProperty(
        _ref32,
        "condition",
        "1. ลูกค้าสามารถติดต่อขอใช้บริการได้ภายใน 90 วัน นับจากวันที่ลูกค้าซื้อสินค้า โดยอ้างอิงจากใบเสร็จ <br> 2.ลูกค้าต้องเตรียมหลักฐานประกอบการรับบริการ เช่น ใบเสร็จของสินค้าหรือใบรับของจากร้านค้าที่ซื้อมา โดยมีรายละเอียดของผู้ซื้อ ผู้ขายรวมถึงรุ่นของสินค้าที่ซื้อมาอย่างชัดเจน <br> 3.บริการสาธิตการใช้งานผลิตภัณฑ์สำหรับตู้เย็นชนิด Family Hub และ AirDresser ในรุ่นที่กำหนด ให้บริการเฉพาะพื้นที่กรุงเทพฯ และปริมณฑลเท่านั้น"
      ),
      _defineProperty(_ref32, "modalType", "search"),
      _defineProperty(_ref32, "modal", [
        {
          product: 1,
          category: 1,
          model: 1,
        },
        {
          product: 2,
          category: 1,
          model: 1,
        },
        {
          product: 1,
          category: 1,
          model: 1,
        },
      ]),
      _ref32),
      {
        no: "05",
        head: "-",
        text: "-",
        image: "unbox-02_07",
        image2: "unbox-mb-02_06",
        title: "e-Demo Service",
      },
    ],
    Repair: [
      {
        no: "04",
        head: "-",
        text: "-",
        image: "unbox-03_01",
        image2: "unbox-mb-03_01",
        title: "พบช่องทางที่หลากหลายในการแจ้งซ่อมผลิตภัณฑ์",
      },
      ((_ref33 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref33, "image", "unbox-03_02"),
      _defineProperty(_ref33, "image2", "unbox-mb-03_02"),
      _defineProperty(_ref33, "title", "1282 Call Center"),
      _ref33),
      ((_ref34 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref34, "image", "unbox-03_03"),
      _defineProperty(_ref34, "image2", "unbox-mb-03_03"),
      _defineProperty(_ref34, "title", "At Your Service"),
      _defineProperty(_ref34, "mapName", "atservice"),
      _defineProperty(_ref34, "imageLinks", [
        {
          name: "atservice",
          url: "https://www.samsung.com/th/support/your-service/main",
        },
      ]),
      _ref34),
      ((_ref35 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref35, "image", "unbox-03_04"),
      _defineProperty(_ref35, "image2", "unbox-mb-03_04"),
      _defineProperty(_ref35, "title", "Samsung Members"),
      _defineProperty(
        _ref35,
        "condition",
        "แอปพลิเคชันนี้รองรับเฉพาะโทรศัพท์ซัมซุงเท่านั้น"
      ),
      _ref35),
      ((_ref36 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref36, "image", "unbox-03_05"),
      _defineProperty(_ref36, "image2", "unbox-mb-03_05"),
      _defineProperty(_ref36, "title", "Live Chat"),
      _ref36),
      ((_ref37 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref37, "image", "unbox-03_06"),
      _defineProperty(_ref37, "image2", "unbox-mb-03_06"),
      _defineProperty(_ref37, "title", "For Home appliance"),
      _defineProperty(
        _ref37,
        "condition",
        "บริการนี้สำหรับเครื่องใช้ไฟฟ้าประเภทตู้เย็น เครื่องซักผ้า เครื่องปรับอากาศ และทีวีขนาด 32 นิ้วขึ้นไปเท่านั้น "
      ),
      _ref37),
    ],
  },
  ac: {
    Unbox: [
      {
        no: "01",
        head: "-",
        text: "-",
        image: "unbox-01_01",
        image2: "unbox-mb-01_01",
        title: "แกะกล่องเครื่องใหม่",
      },
      {
        no: "02",
        head: "-",
        text: "-",
        image: "unbox-01_02",
        image2: "unbox-mb-01_02",
        title: "At Your Service",
        condition:
          "การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง At Your Service เพื่อเป็นข้อมูล ประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
        imageLinks: [
          {
            name: "serviceat",
            url: "https://www.samsung.com/th/support/your-service/main",
          },
        ],
      },
      {
        no: "03",
        head: "-",
        text: "-",
        image: "unbox-01_03",
        image2: "unbox-mb-01_03",
        title: "Samsung Members",
        condition:
          "การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง Samsung Members เพื่อเป็นข้อมูลประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
      }, // {
      //   no: "04",
      //   head: "-",
      //   text: "-",
      //   image: "unbox-01_04",
      //   image2: "unbox-mb-01_04",
      //   url: "serice-btn",
      //   title: "Extended Warranty",
      //   condition:
      //     "1. ลูกค้าต้องลงทะเบียนผ่านเว็บไซต์ SSTHWARRANTY  เพื่อเอาประกันเท่านั้น <br> 2. ระยะเวลาที่ขยายการรับประกันสินค้า ขึ้นอยู่กับรุ่นของสินค้าและโปรโมชั่นขณะนั้น <br> 3. การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง Samsung Members เพื่อเป็นข้อมูลประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
      // },
    ],
    Inquiry: [
      {
        no: "04",
        head: "-",
        text: "-",
        image: "unbox-02_01",
        image2: "unbox-mb-02_01",
        title: "เครื่องใหม่ ยังไม่ชิน / ต้องการแก้ไขปัญหาเริ่มต้น? ",
      },
      ((_ref38 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref38, "image", "unbox-02_02"),
      _defineProperty(_ref38, "image2", "unbox-mb-02_02"),
      _defineProperty(_ref38, "title", "1282 Call Center"),
      _ref38),
      ((_ref39 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref39, "image", "unbox-02_03"),
      _defineProperty(_ref39, "image2", "unbox-mb-02_03"),
      _defineProperty(_ref39, "title", "Live Chat"),
      _defineProperty(_ref39, "mapName", "livechat"),
      _defineProperty(_ref39, "imageLinks", [
        {
          name: "livechat",
          url:
            "https://livechat.support.samsung.com/Customer_mys/CustomerChat_mys.aspx?roomNo=29352510&amp;encrypt=DA7538FE760DCE56801E33CA5AC8840F",
        },
      ]),
      _ref39),
      ((_ref40 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref40, "image", "unbox-02_05"),
      _defineProperty(_ref40, "image2", "unbox-mb-02_05"),
      _defineProperty(_ref40, "title", "Visual Support"),
      _ref40),
      {
        no: "05",
        head: "-",
        text: "-",
        image: "unbox-02_07",
        image2: "unbox-mb-02_06",
        title: "e-Demo Service",
      },
    ],
    Repair: [
      {
        no: "04",
        head: "-",
        text: "-",
        image: "unbox-03_01",
        image2: "unbox-mb-03_01",
        title: "พบช่องทางที่หลากหลายในการแจ้งซ่อมผลิตภัณฑ์",
      },
      ((_ref41 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref41, "image", "unbox-03_02"),
      _defineProperty(_ref41, "image2", "unbox-mb-03_02"),
      _defineProperty(_ref41, "title", "1282 Call Center"),
      _ref41),
      ((_ref42 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref42, "image", "unbox-03_03"),
      _defineProperty(_ref42, "image2", "unbox-mb-03_03"),
      _defineProperty(_ref42, "title", "At Your Service"),
      _defineProperty(_ref42, "mapName", "atservice"),
      _defineProperty(_ref42, "imageLinks", [
        {
          name: "atservice",
          url: "https://www.samsung.com/th/support/your-service/main",
        },
      ]),
      _ref42),
      ((_ref43 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref43, "image", "unbox-03_04"),
      _defineProperty(_ref43, "image2", "unbox-mb-03_04"),
      _defineProperty(_ref43, "title", "Samsung Members"),
      _defineProperty(
        _ref43,
        "condition",
        "แอปพลิเคชันนี้รองรับเฉพาะโทรศัพท์ซัมซุงเท่านั้น"
      ),
      _ref43),
      ((_ref44 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref44, "image", "unbox-03_05"),
      _defineProperty(_ref44, "image2", "unbox-mb-03_05"),
      _defineProperty(_ref44, "title", "Live Chat"),
      _ref44),
      ((_ref45 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref45, "image", "unbox-03_06"),
      _defineProperty(_ref45, "image2", "unbox-mb-03_06"),
      _defineProperty(_ref45, "title", "For Home appliance"),
      _defineProperty(
        _ref45,
        "condition",
        "บริการนี้สำหรับเครื่องใช้ไฟฟ้าประเภทตู้เย็น เครื่องซักผ้า เครื่องปรับอากาศ และทีวีขนาด 32 นิ้วขึ้นไปเท่านั้น "
      ),
      _ref45),
    ],
  },
  mc: {
    Unbox: [
      {
        no: "01",
        head: "-",
        text: "-",
        image: "unbox-01_01",
        image2: "unbox-mb-01_01",
        title: "แกะกล่องเครื่องใหม่",
      },
      {
        no: "02",
        head: "-",
        text: "-",
        image: "unbox-01_02",
        image2: "unbox-mb-01_02",
        title: "At Your Service",
        condition:
          "การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง At Your Service เพื่อเป็นข้อมูล ประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
        imageLinks: [
          {
            name: "serviceat",
            url: "https://www.samsung.com/th/support/your-service/main",
          },
        ],
      },
      {
        no: "03",
        head: "-",
        text: "-",
        image: "unbox-01_03",
        image2: "unbox-mb-01_03",
        title: "Samsung Members",
        condition:
          "การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง Samsung Members เพื่อเป็นข้อมูลประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
      }, // {
      //   no: "04",
      //   head: "-",
      //   text: "-",
      //   image: "unbox-01_04",
      //   image2: "unbox-mb-01_04",
      //   url: "serice-btn",
      //   title: "Extended Warranty",
      //   condition:
      //     "1. ลูกค้าต้องลงทะเบียนผ่านเว็บไซต์ SSTHWARRANTY  เพื่อเอาประกันเท่านั้น <br> 2. ระยะเวลาที่ขยายการรับประกันสินค้า ขึ้นอยู่กับรุ่นของสินค้าและโปรโมชั่นขณะนั้น <br> 3. การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง Samsung Members เพื่อเป็นข้อมูลประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
      // },
    ],
    Inquiry: [
      {
        no: "04",
        head: "-",
        text: "-",
        image: "unbox-02_01",
        image2: "unbox-mb-02_01",
        title: "เครื่องใหม่ ยังไม่ชิน / ต้องการแก้ไขปัญหาเริ่มต้น? ",
      },
      ((_ref46 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref46, "image", "unbox-02_02"),
      _defineProperty(_ref46, "image2", "unbox-mb-02_02"),
      _defineProperty(_ref46, "title", "1282 Call Center"),
      _ref46),
      ((_ref47 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref47, "image", "unbox-02_03"),
      _defineProperty(_ref47, "image2", "unbox-mb-02_03"),
      _defineProperty(_ref47, "title", "Live Chat"),
      _defineProperty(_ref47, "mapName", "livechat"),
      _defineProperty(_ref47, "imageLinks", [
        {
          name: "livechat",
          url:
            "https://livechat.support.samsung.com/Customer_mys/CustomerChat_mys.aspx?roomNo=29352510&amp;encrypt=DA7538FE760DCE56801E33CA5AC8840F",
        },
      ]),
      _ref47),
      ((_ref48 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref48, "image", "unbox-02_05"),
      _defineProperty(_ref48, "image2", "unbox-mb-02_visual"),
      _defineProperty(_ref48, "title", "Visual Support"),
      _ref48),
    ],
    Repair: [
      {
        no: "04",
        head: "-",
        text: "-",
        image: "unbox-03_01",
        image2: "unbox-mb-03_01",
        title: "พบช่องทางที่หลากหลายในการแจ้งซ่อมผลิตภัณฑ์",
      },
      ((_ref49 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref49, "image", "unbox-03_02"),
      _defineProperty(_ref49, "image2", "unbox-mb-03_02"),
      _defineProperty(_ref49, "title", "1282 Call Center"),
      _ref49),
      ((_ref50 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref50, "image", "unbox-03_03"),
      _defineProperty(_ref50, "image2", "unbox-mb-03_03"),
      _defineProperty(_ref50, "title", "At Your Service"),
      _defineProperty(_ref50, "mapName", "atservice"),
      _defineProperty(_ref50, "imageLinks", [
        {
          name: "atservice",
          url: "https://www.samsung.com/th/support/your-service/main",
        },
      ]),
      _ref50),
      ((_ref51 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref51, "image", "unbox-03_04"),
      _defineProperty(_ref51, "image2", "unbox-mb-03_04"),
      _defineProperty(_ref51, "title", "Samsung Members"),
      _defineProperty(
        _ref51,
        "condition",
        "แอปพลิเคชันนี้รองรับเฉพาะโทรศัพท์ซัมซุงเท่านั้น"
      ),
      _ref51),
      ((_ref52 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref52, "image", "unbox-03_05"),
      _defineProperty(_ref52, "image2", "unbox-mb-03_05"),
      _defineProperty(_ref52, "title", "Live Chat"),
      _ref52),
    ],
  },
  robot: {
    Unbox: [
      {
        no: "01",
        head: "-",
        text: "-",
        image: "unbox-01_01",
        image2: "unbox-mb-01_01",
        title: "แกะกล่องเครื่องใหม่",
      },
      {
        no: "02",
        head: "-",
        text: "-",
        image: "unbox-01_02",
        image2: "unbox-mb-01_02",
        title: "At Your Service",
        condition:
          "การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง At Your Service เพื่อเป็นข้อมูล ประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
        imageLinks: [
          {
            name: "serviceat",
            url: "https://www.samsung.com/th/support/your-service/main",
          },
        ],
      },
      {
        no: "03",
        head: "-",
        text: "-",
        image: "unbox-01_03",
        image2: "unbox-mb-01_03",
        title: "Samsung Members",
        condition:
          "การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง Samsung Members เพื่อเป็นข้อมูลประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
      }, // {
      //   no: "04",
      //   head: "-",
      //   text: "-",
      //   image: "unbox-01_04",
      //   image2: "unbox-mb-01_04",
      //   url: "serice-btn",
      //   title: "Extended Warranty",
      //   condition:
      //     "1. ลูกค้าต้องลงทะเบียนผ่านเว็บไซต์ SSTHWARRANTY  เพื่อเอาประกันเท่านั้น <br> 2. ระยะเวลาที่ขยายการรับประกันสินค้า ขึ้นอยู่กับรุ่นของสินค้าและโปรโมชั่นขณะนั้น <br> 3. การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง Samsung Members เพื่อเป็นข้อมูลประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
      // },
    ],
    Inquiry: [
      {
        no: "04",
        head: "-",
        text: "-",
        image: "unbox-02_01",
        image2: "unbox-mb-02_01",
        title: "เครื่องใหม่ ยังไม่ชิน / ต้องการแก้ไขปัญหาเริ่มต้น? ",
      },
      ((_ref53 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref53, "image", "unbox-02_02"),
      _defineProperty(_ref53, "image2", "unbox-mb-02_02"),
      _defineProperty(_ref53, "title", "1282 Call Center"),
      _ref53),
      ((_ref54 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref54, "image", "unbox-02_03"),
      _defineProperty(_ref54, "image2", "unbox-mb-02_03"),
      _defineProperty(_ref54, "title", "Live Chat"),
      _defineProperty(_ref54, "mapName", "livechat"),
      _defineProperty(_ref54, "imageLinks", [
        {
          name: "livechat",
          url:
            "https://livechat.support.samsung.com/Customer_mys/CustomerChat_mys.aspx?roomNo=29352510&amp;encrypt=DA7538FE760DCE56801E33CA5AC8840F",
        },
      ]),
      _ref54),
      ((_ref55 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref55, "image", "unbox-02_05"),
      _defineProperty(_ref55, "image2", "unbox-mb-02_visual"),
      _defineProperty(_ref55, "title", "Visual Support"),
      _ref55),
    ],
    Repair: [
      {
        no: "04",
        head: "-",
        text: "-",
        image: "unbox-03_01",
        image2: "unbox-mb-03_01",
        title: "พบช่องทางที่หลากหลายในการแจ้งซ่อมผลิตภัณฑ์",
      },
      ((_ref56 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref56, "image", "unbox-03_02"),
      _defineProperty(_ref56, "image2", "unbox-mb-03_02"),
      _defineProperty(_ref56, "title", "1282 Call Center"),
      _ref56),
      ((_ref57 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref57, "image", "unbox-03_03"),
      _defineProperty(_ref57, "image2", "unbox-mb-03_03"),
      _defineProperty(_ref57, "title", "At Your Service"),
      _defineProperty(_ref57, "mapName", "atservice"),
      _defineProperty(_ref57, "imageLinks", [
        {
          name: "atservice",
          url: "https://www.samsung.com/th/support/your-service/main",
        },
      ]),
      _ref57),
      ((_ref58 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref58, "image", "unbox-03_04"),
      _defineProperty(_ref58, "image2", "unbox-mb-03_04"),
      _defineProperty(_ref58, "title", "Samsung Members"),
      _defineProperty(
        _ref58,
        "condition",
        "แอปพลิเคชันนี้รองรับเฉพาะโทรศัพท์ซัมซุงเท่านั้น"
      ),
      _ref58),
      ((_ref59 = {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
      }),
      _defineProperty(_ref59, "image", "unbox-03_05"),
      _defineProperty(_ref59, "image2", "unbox-mb-03_05"),
      _defineProperty(_ref59, "title", "Live Chat"),
      _ref59),
    ],
  },
};
var mainActive = "mobile";
var subActive = "Unbox";
var No = 1;

var eventSlider = function eventSlider(current) {
  var totalSlides = items[mainActive][subActive].length;
  var btnNext = ".swiper-button-next";
  var btnPrev = ".swiper-button-prev";
  No = current.activeIndex + 1;

  if (No >= totalSlides) {
    $(btnNext).hide();
  } else {
    $(btnNext).show();
  }

  if (No == 1) {
    $(btnPrev).hide();
  } else {
    $(btnPrev).show();
  }

  $("#".concat(subActive, " #currentslide")).text(No);
  var find = items[mainActive][subActive][current.activeIndex];
  var title = find.title ? find.title : "no-title";
  var condition = find.condition ? find.condition : false;

  if (condition) {
    $(".tool-tip-ex .tooltiptext").html(condition);
    $(".tool-tip-ex").show();
  } else {
    $(".tool-tip-ex").hide();
  }

  $("#".concat(subActive, " #totalslide")).html(
    ""
      .concat(totalSlides, ' <span class="title-page">')
      .concat(title, " </span>")
  );
};

var callSlider = function callSlider() {
  var swiper2 = new Swiper(".s2", {
    slidesPerView: 1,
    // spaceBetween: 30,
    loop: false,
    // width: 1166,
    // setWrapperSize: true,
    // mousewheel: {
    //   invert: true,
    // },
    simulateTouch: false,
    centeredSlides: true,
    autoHeight: true,
    pagination: {
      el: ".swiper-pagination,.swiper-paginations",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function init(current) {
        console.log("#".concat(subActive, " #currentslide"));
        eventSlider(current);
      },
      slideChange: function slideChange(current) {
        // console.log("current", current.activeIndex - 1);
        console.log("swiper change");
        eventSlider(current);
      },
    },
    breakpoints: {
      768: {
        slidesPerView: 1.5,
        spaceBetween: 100,
        autoHeight: false,
      },
    },
  });
};

var renderAImageLink = function renderAImageLink(links) {
  var html = "";

  if (links && links.length) {
    links.forEach(function (el) {
      html += '<a class="link-ss--'
        .concat(el.name, '" href="')
        .concat(el.url, '" target="_blank"></a>');
    });
  }

  return html;
};

var renderSlider = function renderSlider(name) {
  var templateHtml = function templateHtml(data) {
    var textModalAttr = "";

    if (data.modal) {
      textModalAttr = 'data-modal="'.concat(data.modalName, '"');
    } // if (subActive == 'Unbox' || subActive == 'Inquiry' ){

    return ' \n        <div class="swiper-slide slide--01" >\n           <div class="slide--item">\n           \n             <div class="image-service">\n              <button class="outline" '
      .concat(textModalAttr, '>\n               <img src="images/')
      .concat(data.image, ".png\" usemap='#")
      .concat(
        data.mapName,
        '\' width="100%" class="dt-show"/>\n               \n               <img src="images/'
      )
      .concat(data.image2, ".png\" usemap='#")
      .concat(
        data.mapName,
        '-m\' alt="" width="100%" class="mb-show"/>\n               </button>\n               '
      )
      .concat(
        renderAImageLink(data.imageLinks),
        "\n              </div>\n            </div>\n        </div>\n        "
      ); // }
    // else if (subActive == "Extra") {
    //   return `
    //   <div class="swiper-slide slide--01">
    //      <div class="slide--item">
    //          <img src="images/${data.image}.png" alt=""  width="100%" class="dt-show"/>
    //          <img src="images/${data.image2}.png" alt=""  width="100%" class="mb-show"/>
    //       </div>
    //   </div>
    //   `;
    // }
  };

  var render = "";
  items[name][subActive].forEach(function (el) {
    render += templateHtml(el);
  });
  return render;
};

var modalActive = "";

var setModalLength = function setModalLength(n) {
  $("#modal-html .m--result span").text(n);
};

var init = {
  menuClick: function menuClick() {
    $(".button-menu--click").click(function () {
      var dataSlider = $(this).data("slider");
      mainActive = dataSlider; //$(".wrap-s2 .swiper-wrapper").empty();

      var content = $("#".concat(subActive, " .swiper-wrapper"));
      var activeArray = items[mainActive];
      $(".tablinks").hide();

      for (var key in activeArray) {
        $("[data-tabname='".concat(key, "']")).show();
      }

      content.html(renderSlider(mainActive)); //  let content2 = $(`#${subActive} .titleslide`);
      //  content2.html(rendertitle(mainActive));
      // console.log(renderSlider(mainActive));
      // console.log(dataSlider);
      // console.log(subActive);

      callSlider();
    });
  },
  tabClick: function tabClick() {
    $(".service--tab .tablinks").click(function () {
      var dataTabname = $(this).data("tabname");
      subActive = dataTabname;
      var content = $("#".concat(subActive, " .swiper-wrapper"));
      content.html(renderSlider(mainActive));
      console.log(subActive); // let content2 = $(`#${subActive} .titleslide`);
      // content2.html(rendertitle(mainActive));

      callSlider();
    });
  },
  modal: {
    click: function click() {
      $("[data-modal]").live("click", function () {
        modalActive = $(this).data("modal");
        var itemActive = items[mainActive][subActive];

        var findModalActiveByName = _.find(itemActive, function (el) {
          return el.modalName == modalActive;
        });

        var datas = findModalActiveByName.modal; // let modalTitle = findModalActiveByName.modalTitle

        var resultData = _.map(datas, function (el) {
          var product_text = _.find(products, function (p) {
            return p.key == el.product;
          });

          var category_text = _.find(categories, function (p) {
            return p.key == el.category;
          });

          var model_text = _.find(models, function (p) {
            return p.key == el.model;
          });

          return {
            product: product_text ? product_text : el.product,
            category: category_text ? category_text : el.category,
            model: model_text ? model_text : el.model,
          };
        });

        console.log("map", {
          resultData: resultData,
          itemActive: itemActive,
          modalActive: modalActive,
        });
        $("#s-modal .modal-content").css("display", "block");
        $("#s-modal").css("display", "block");
        var renderModal = renderModalSearch(resultData);
        $("#s-modal .modal-content #modal-html .table-list").html(renderModal); // $(`#s-modal .modal-content #modal-html h1.modal-title`).html(modalTitle)
      });
    },
    close: function close() {
      $(".close").live("click", function () {
        $("#s-modal").css("display", "none");
      });
    },
    search: function search() {
      $(".myInputModal").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
        var countSearch = $("#myTable").children("tr:visible").length;
        setModalLength(countSearch);
      });
    },
  },
};
$(window).ready(function () {
  init.menuClick();
  init.tabClick();
  init.modal.click();
  init.modal.close();
  init.modal.search();
});

var renderTable = function renderTable(header, bodyCol, bodyDatas) {
  var head =
    '\n  <thead class="head-d">\n  <tr>\n  $COLUMN\n  </tr>\n  </thead>\n  ';
  var headColumn = "";
  header.forEach(function (el) {
    headColumn += "<td>".concat(el, "</td>");
  });
  head = head.replace("$COLUMN", headColumn);
  var body = '\n  <tbody id="myTable">\n  $COLUMN\n  </tbody>\n  ';
  var bodyColumn = "";
  bodyDatas.forEach(function (el) {
    bodyColumn += "<tr>";
    bodyCol.forEach(function (ibody) {
      var x = el[ibody];
      bodyColumn += "<td>".concat(x.name, "</td>");
    });
    bodyColumn += "</tr>";
  });
  body = body.replace("$COLUMN", bodyColumn);
  var html = "\n  <table >\n  "
    .concat(head, "\n  ")
    .concat(body, "\n  </table>\n  ");
  return html;
};

var renderModalSearch = function renderModalSearch(resultData) {
  var table = renderTable(
    ["Products", "Category", "Models"],
    ["product", "category", "model"],
    resultData
  );
  setModalLength(resultData.length);
  var html = "\n  ".concat(table, "\n  ");
  return html;
};
