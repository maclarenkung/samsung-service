const tagA = (url, text = false) => {
  return `<a href="${url}" target="_blank" >${text ? text : url}</a>`
}

let modalx =   [
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
            model:19,
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
          
        ]
let products = [
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

let categories = [
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

let models = [
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
let items = {
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
      },
      // {
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
      },
      // {
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
      },
      // {
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
        condition: `ตรวจสอบเงื่อนไขเพิ่มเติมที่ ${tagA(
          "https://www.samsung.com/th/butler"
        )} `,
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
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-02_02",
        image2: "unbox-mb-02_02",
        title: "1282 Call Center",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
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
        image: "slide",
        image: "unbox-02_04",
        image2: "unbox-mb-02_04",
        title: "Remote Service",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-02_05",
        image2: "unbox-mb-02_visual",
        title: "Visual Support",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-02_06",
        image2: "unbox-mb-02_05",
        title: "Private Demo Service",

        condition:
          "1. ลูกค้าสามารถติดต่อขอใช้บริการได้ภายใน 90 วัน นับจากวันที่ลูกค้าซื้อสินค้า โดยอ้างอิงจากใบเสร็จ <br> 2.ลูกค้าต้องเตรียมหลักฐานประกอบการรับบริการ เช่น ใบเสร็จของสินค้าหรือใบรับของจากร้านค้าที่ซื้อมา โดยมีรายละเอียดของผู้ซื้อ ผู้ขายรวมถึงรุ่นของสินค้าที่ซื้อมาอย่างชัดเจน <br> 3.บริการสาธิตการใช้งานผลิตภัณฑ์สำหรับตู้เย็นชนิด Family Hub และ AirDresser ในรุ่นที่กำหนด ให้บริการเฉพาะพื้นที่กรุงเทพฯ และปริมณฑลเท่านั้น",
        modalType: "search",
        modalName: "private-service",
        modal:      modalx,
      },
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
        image: "slide",
        image: "unbox-03_02",
        image2: "unbox-mb-03_02",
        title: "1282 Call Center",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
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
        image: "slide",
        image: "unbox-03_04",
        image2: "unbox-mb-03_04",
        title: "Samsung Members",
        condition: "แอปพลิเคชันนี้รองรับเฉพาะโทรศัพท์ซัมซุงเท่านั้น",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-03_05",
        image2: "unbox-mb-03_05",
        title: "Live Chat",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-03_06",
        image2: "unbox-mb-03_06",
        title: "For Home appliance",
        condition:
          "บริการนี้สำหรับเครื่องใช้ไฟฟ้าประเภทตู้เย็น เครื่องซักผ้า เครื่องปรับอากาศ และทีวีขนาด 32 นิ้วขึ้นไปเท่านั้น ",
      },
    ],
    Extra: [
      {
        no: "04",
        head: "-",
        text: "-",
        image: "unbox-04_01",
        image2: "unbox-mb-04_01",
        title: " ",
        title: "Extra benefit ",
        condition:
          "เมื่อซื้อ Samsung Smart TV รุ่นปี 2020 และลงทะเบียนรับสิทธิ์ระหว่างวันที่ 1 ส.ค. 63 – 31 ต.ค. 63",
      },
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
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-02_02",
        image2: "unbox-mb-02_02",
        title: "1282 Call Center",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
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
        image: "slide",
        image: "unbox-02_05",
        image2: "unbox-mb-02_05",
        title: "Visual Support",
      },
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
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-03_02",
        image2: "unbox-mb-03_02",
        title: "1282 Call Center",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
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
        image: "slide",
        image: "unbox-03_04",
        image2: "unbox-mb-03_04",
        title: "Samsung Members",
        condition: "แอปพลิเคชันนี้รองรับเฉพาะโทรศัพท์ซัมซุงเท่านั้น",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-03_05",
        image2: "unbox-mb-03_05",
        title: "Live Chat",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-03_06",
        image2: "unbox-mb-03_06",
        title: "For Home appliance",
        condition:
          "บริการนี้สำหรับเครื่องใช้ไฟฟ้าประเภทตู้เย็น เครื่องซักผ้า เครื่องปรับอากาศ และทีวีขนาด 32 นิ้วขึ้นไปเท่านั้น ",
      },
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
      },
      // {
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
        image: "slide",
        image: "unbox-02_02",
        image2: "unbox-mb-02_02",
        title: "1282 Call Center",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
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
        image: "slide",
        image: "unbox-02_05",
        image2: "unbox-mb-02_visual",
        title: "Visual Support",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-02_05",
        image2: "unbox-mb-02_05",
        title: "Private Demo Service",
        modalName: "e-demo",
        condition:
          "1. ลูกค้าสามารถติดต่อขอใช้บริการได้ภายใน 90 วัน นับจากวันที่ลูกค้าซื้อสินค้า โดยอ้างอิงจากใบเสร็จ <br> 2.ลูกค้าต้องเตรียมหลักฐานประกอบการรับบริการ เช่น ใบเสร็จของสินค้าหรือใบรับของจากร้านค้าที่ซื้อมา โดยมีรายละเอียดของผู้ซื้อ ผู้ขายรวมถึงรุ่นของสินค้าที่ซื้อมาอย่างชัดเจน <br> 3.บริการสาธิตการใช้งานผลิตภัณฑ์สำหรับตู้เย็นชนิด Family Hub และ AirDresser ในรุ่นที่กำหนด ให้บริการเฉพาะพื้นที่กรุงเทพฯ และปริมณฑลเท่านั้น",
        modalType: "search",
        modal: [
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
        ],
      },
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
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-03_02",
        image2: "unbox-mb-03_02",
        title: "1282 Call Center",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
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
        image: "slide",
        image: "unbox-03_04",
        image2: "unbox-mb-03_04",
        title: "Samsung Members",
        condition: "แอปพลิเคชันนี้รองรับเฉพาะโทรศัพท์ซัมซุงเท่านั้น",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-03_05",
        image2: "unbox-mb-03_05",
        title: "Live Chat",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-03_06",
        image2: "unbox-mb-03_06",
        title: "For Home appliance",
        condition:
          "บริการนี้สำหรับเครื่องใช้ไฟฟ้าประเภทตู้เย็น เครื่องซักผ้า เครื่องปรับอากาศ และทีวีขนาด 32 นิ้วขึ้นไปเท่านั้น ",
      },
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
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-02_02",
        image2: "unbox-mb-02_02",
        title: "1282 Call Center",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
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
        image: "slide",
        image: "unbox-02_05",
        image2: "unbox-mb-02_visual",
        title: "Visual Support",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-02_05",
        image2: "unbox-mb-02_05",
        title: "Private Demo Service",
        condition:
          "1. ลูกค้าสามารถติดต่อขอใช้บริการได้ภายใน 90 วัน นับจากวันที่ลูกค้าซื้อสินค้า โดยอ้างอิงจากใบเสร็จ <br> 2.ลูกค้าต้องเตรียมหลักฐานประกอบการรับบริการ เช่น ใบเสร็จของสินค้าหรือใบรับของจากร้านค้าที่ซื้อมา โดยมีรายละเอียดของผู้ซื้อ ผู้ขายรวมถึงรุ่นของสินค้าที่ซื้อมาอย่างชัดเจน <br> 3.บริการสาธิตการใช้งานผลิตภัณฑ์สำหรับตู้เย็นชนิด Family Hub และ AirDresser ในรุ่นที่กำหนด ให้บริการเฉพาะพื้นที่กรุงเทพฯ และปริมณฑลเท่านั้น",
        modalType: "search",
        modal: [
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
        ],
      },
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
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-03_02",
        image2: "unbox-mb-03_02",
        title: "1282 Call Center",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
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
        image: "slide",
        image: "unbox-03_04",
        image2: "unbox-mb-03_04",
        title: "Samsung Members",
        condition: "แอปพลิเคชันนี้รองรับเฉพาะโทรศัพท์ซัมซุงเท่านั้น",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-03_05",
        image2: "unbox-mb-03_05",
        title: "Live Chat",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-03_06",
        image2: "unbox-mb-03_06",
        title: "For Home appliance",
        condition:
          "บริการนี้สำหรับเครื่องใช้ไฟฟ้าประเภทตู้เย็น เครื่องซักผ้า เครื่องปรับอากาศ และทีวีขนาด 32 นิ้วขึ้นไปเท่านั้น ",
      },
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
      },
      // {
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
        image: "slide",
        image: "unbox-02_02",
        image2: "unbox-mb-02_02",
        title: "1282 Call Center",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
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
        image: "slide",
        image: "unbox-02_05",
        image2: "unbox-mb-02_05",
        title: "Visual Support",
      },
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
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-03_02",
        image2: "unbox-mb-03_02",
        title: "1282 Call Center",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
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
        image: "slide",
        image: "unbox-03_04",
        image2: "unbox-mb-03_04",
        title: "Samsung Members",
        condition: "แอปพลิเคชันนี้รองรับเฉพาะโทรศัพท์ซัมซุงเท่านั้น",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-03_05",
        image2: "unbox-mb-03_05",
        title: "Live Chat",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-03_06",
        image2: "unbox-mb-03_06",
        title: "For Home appliance",
        condition:
          "บริการนี้สำหรับเครื่องใช้ไฟฟ้าประเภทตู้เย็น เครื่องซักผ้า เครื่องปรับอากาศ และทีวีขนาด 32 นิ้วขึ้นไปเท่านั้น ",
      },
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
      },
      // {
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
        image: "slide",
        image: "unbox-02_02",
        image2: "unbox-mb-02_02",
        title: "1282 Call Center",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
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
        image: "slide",
        image: "unbox-02_05",
        image2: "unbox-mb-02_visual",
        title: "Visual Support",
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
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-03_02",
        image2: "unbox-mb-03_02",
        title: "1282 Call Center",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
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
        image: "slide",
        image: "unbox-03_04",
        image2: "unbox-mb-03_04",
        title: "Samsung Members",
        condition: "แอปพลิเคชันนี้รองรับเฉพาะโทรศัพท์ซัมซุงเท่านั้น",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-03_05",
        image2: "unbox-mb-03_05",
        title: "Live Chat",
      },
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
      },
      // {
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
        image: "slide",
        image: "unbox-02_02",
        image2: "unbox-mb-02_02",
        title: "1282 Call Center",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
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
        image: "slide",
        image: "unbox-02_05",
        image2: "unbox-mb-02_visual",
        title: "Visual Support",
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
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-03_02",
        image2: "unbox-mb-03_02",
        title: "1282 Call Center",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
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
        image: "slide",
        image: "unbox-03_04",
        image2: "unbox-mb-03_04",
        title: "Samsung Members",
        condition: "แอปพลิเคชันนี้รองรับเฉพาะโทรศัพท์ซัมซุงเท่านั้น",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-03_05",
        image2: "unbox-mb-03_05",
        title: "Live Chat",
      },
    ],
  },
};

let mainActive = "mobile"
let subActive = "Unbox"
let No = 1
const eventSlider = (current) => {
  var totalSlides = items[mainActive][subActive].length

  let btnNext = ".swiper-button-next"
  let btnPrev = ".swiper-button-prev"
  No = current.activeIndex + 1
  if (No >= totalSlides) {
    $(btnNext).hide()
  } else {
    $(btnNext).show()
  }

  if (No == 1) {
    $(btnPrev).hide()
  } else {
    $(btnPrev).show()
  }

  $(`#${subActive} #currentslide`).text(No)
  let find = items[mainActive][subActive][current.activeIndex]
  let title = find.title ? find.title : "no-title"
  let condition = find.condition ? find.condition : false
  if (condition) {
    $(`.tool-tip-ex .tooltiptext`).html(condition)
    $(`.tool-tip-ex`).show()
  } else {
    $(`.tool-tip-ex`).hide()
  }

  $(`#${subActive} #totalslide`).html(`${totalSlides} <span class="title-page">${title} </span>`);
}
const callSlider = () => {
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
      init: function (current) {
        console.log(`#${subActive} #currentslide`);
        eventSlider(current);
      },
      slideChange: function (current) {
        // console.log("current", current.activeIndex - 1);
        console.log("swiper change");
        eventSlider(current);
      },
    },
    breakpoints: {
      
      768: {
        slidesPerView: 1.5,
        spaceBetween: 100,
        autoHeight: false ,
      },
    },
  });
}

const renderAImageLink = (links) =>{
  let html=''

  if (links && links.length){
    links.forEach((el) => {
      html += `<a class="link-ss--${el.name}" href="${el.url}" target="_blank"></a>`;
    });
  }

    return html;
}
const renderSlider = (name) => {
  let templateHtml = (data) => {
    let textModalAttr = ""
    if (data.modal) {
      textModalAttr = `data-modal="${data.modalName}"`
    }
    // if (subActive == 'Unbox' || subActive == 'Inquiry' ){
    return ` 
        <div class="swiper-slide slide--01" >
           <div class="slide--item">
           
             <div class="image-service">
              <button class="outline" ${textModalAttr}>
               <img src="images/${data.image}.png" usemap='#${data.mapName}' width="100%" class="dt-show"/>
               
               <img src="images/${data.image2}.png" usemap='#${data.mapName}-m' alt="" width="100%" class="mb-show"/>
               </button>
               ${renderAImageLink(data.imageLinks)}
              </div>
            </div>
        </div>
        `;
    // }
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
  }
  let render = ""
  items[name][subActive].forEach((el) => {
    render += templateHtml(el)
  })
  return render
}

let modalActive = ""

let setModalLength = (n) => {
  $("#modal-html .m--result span").text(n)
}
const init = {
  menuClick() {
    $(".button-menu--click").click(function () {
      let dataSlider = $(this).data("slider")
      mainActive = dataSlider
      //$(".wrap-s2 .swiper-wrapper").empty();
      let content = $(`#${subActive} .swiper-wrapper`)
      let activeArray = items[mainActive]
      $('.tablinks').hide()

      for(var key in activeArray){
        $(`[data-tabname='${key}']`).show()
      }
      content.html(renderSlider(mainActive))

      //  let content2 = $(`#${subActive} .titleslide`);
      //  content2.html(rendertitle(mainActive));
      // console.log(renderSlider(mainActive));
      // console.log(dataSlider);
      // console.log(subActive);

      callSlider()
    })
  },
  tabClick() {
    $(".service--tab .tablinks").click(function () {
      let dataTabname = $(this).data("tabname")
      subActive = dataTabname
      let content = $(`#${subActive} .swiper-wrapper`)
      content.html(renderSlider(mainActive))
      console.log(subActive)
      // let content2 = $(`#${subActive} .titleslide`);
      // content2.html(rendertitle(mainActive));

      callSlider()
    })
  },

  modal: {
    click() {
      $("[data-modal]").live("click", function () {
        modalActive = $(this).data("modal")

        let itemActive = items[mainActive][subActive]
        let findModalActiveByName = _.find(itemActive, (el) => el.modalName == modalActive)
        let datas = findModalActiveByName.modal
        // let modalTitle = findModalActiveByName.modalTitle

        let resultData = _.map(datas, (el) => {
          let product_text = _.find(products, (p) => p.key == el.product)
          let category_text = _.find(categories, (p) => p.key == el.category)
          let model_text = _.find(models, (p) => p.key == el.model)

          return {
            product: product_text ? product_text : el.product,
            category: category_text ? category_text : el.category,
            model: model_text ? model_text : el.model,
          }
        })

        console.log("map", { resultData, itemActive, modalActive })

        $(`#s-modal .modal-content`).css("display", "block")
        $(`#s-modal`).css("display", "block")

        let renderModal = renderModalSearch(resultData)

        $(`#s-modal .modal-content #modal-html .table-list`).html(renderModal)
        // $(`#s-modal .modal-content #modal-html h1.modal-title`).html(modalTitle)
      })
    },
    close() {
      $(".close").live("click", function () {
        $(`#s-modal`).css("display", "none")
      })
    },
    search() {
      $(".myInputModal").on("keyup", function () {
        var value = $(this).val().toLowerCase()
        $("#myTable tr").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        })
        let countSearch = $("#myTable").children("tr:visible").length
        setModalLength(countSearch)
      })
    },
  },
}

$(window).ready(() => {
  init.menuClick()
  init.tabClick()
  init.modal.click()
  init.modal.close()
  init.modal.search()
})

const renderTable = (header, bodyCol, bodyDatas) => {
  let head = `
  <thead class="head-d">
  <tr>
  $COLUMN
  </tr>
  </thead>
  `

  let headColumn = ""

  header.forEach((el) => {
    headColumn += `<td>${el}</td>`
  })

  head = head.replace("$COLUMN", headColumn)

  let body = `
  <tbody id="myTable">
  $COLUMN
  </tbody>
  `

  let bodyColumn = ""

  bodyDatas.forEach((el) => {
    bodyColumn += "<tr>"
    bodyCol.forEach((ibody) => {
      let x = el[ibody]
      bodyColumn += `<td>${x.name}</td>`
    })
    bodyColumn += "</tr>"
  })

  body = body.replace("$COLUMN", bodyColumn)

  let html = `
  <table >
  ${head}
  ${body}
  </table>
  `

  return html
}

const renderModalSearch = (resultData) => {
  let table = renderTable(
    ["Products", "Category", "Models"],
    ["product", "category", "model"],
    resultData
  )

  setModalLength(resultData.length)
  let html = `
  ${table}
  `

  return html
}
