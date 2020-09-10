const tagA = (url, text = false) => {
  return `<a href="${url}" >${text ? text : url}</a>`
}
let products = [
  {
    key: 1,
    name: "เครื่องปรับอากาศ",
  },
  {
    key: 2,
    name: "ตู้เย็น",
  },
]

let categories = [
  {
    key: 1,
    name: "Wind Free Plus",
  },
  {
    key: 2,
    name: "Triple Cooling",
  },
]

let models = [
  {
    key: 1,
    name: "AR10RYCXAWKNST",
  },
  {
    key: 2,
    name: "MUM-0416",
  },
]
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
        condition:
          "การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง At Your Service เพื่อเป็นข้อมูล ประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
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
      },
      {
        no: "05",
        head: "-",
        text: "-",

        image: "unbox-02_04",
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
        title: " ",
        condition: `ตรวจสอบเงื่อนไขเพิ่มเติมที่ ${tagA("https://www.samsung.com/th/butler")} `,
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
        condition:
          "1. ลูกค้าต้องลงทะเบียนผ่านเว็บไซต์ SSTHWARRANTY  เพื่อเอาประกันเท่านั้น <br> 2. ระยะเวลาที่ขยายการรับประกันสินค้า ขึ้นอยู่กับรุ่นของสินค้าและโปรโมชั่นขณะนั้น <br> 3. การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง Samsung Members เพื่อเป็นข้อมูลประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
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
        image2: "unbox-mb-02_05",
        title: "Visual Support",
      },
      {
        no: "05",
        head: "-",
        text: "-",
        image: "slide",
        image: "unbox-02_06",
        image2: "unbox-mb-02_06",
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
        condition:
          "1. ลูกค้าต้องลงทะเบียนผ่านเว็บไซต์ SSTHWARRANTY  เพื่อเอาประกันเท่านั้น <br> 2. ระยะเวลาที่ขยายการรับประกันสินค้า ขึ้นอยู่กับรุ่นของสินค้าและโปรโมชั่นขณะนั้น <br> 3. การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง Samsung Members เพื่อเป็นข้อมูลประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
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
      },
      // {
      //   no: "05",
      //   head: "-",
      //   text: "-",
      //   image: "slide",
      //   image: "unbox-02_04",
      //   image2: "unbox-02_04",
      //   title: "Remote Service",
      // },
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
        condition:
          "1. ลูกค้าต้องลงทะเบียนผ่านเว็บไซต์ SSTHWARRANTY  เพื่อเอาประกันเท่านั้น <br> 2. ระยะเวลาที่ขยายการรับประกันสินค้า ขึ้นอยู่กับรุ่นของสินค้าและโปรโมชั่นขณะนั้น <br> 3. การลงทะเบียนผลิตภัณฑ์ผ่านช่องทาง Samsung Members เพื่อเป็นข้อมูลประกันสินค้าทั่วไป ไม่รวมถึงการขยายระยะรับประกันเพิ่มเติม",
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
      },
      // {
      //   no: "05",
      //   head: "-",
      //   text: "-",
      //   image: "slide",
      //   image: "unbox-02_04",
      //   image2: "unbox-02_04",
      //   title: "Remote Service",
      // },
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
}

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
    spaceBetween: 30,
    loop: false,
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
              <button class="" ${textModalAttr}>
               <img src="images/${data.image}.png" alt=""  width="100%" class="dt-show"/>
               <img src="images/${data.image2}.png" alt=""  width="100%" class="mb-show"/>
              </button>
            </div>
        </div>
         
      
        `
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
        let modalTitle = findModalActiveByName.modalTitle

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
        $(`#s-modal .modal-content #modal-html h1.modal-title`).html(modalTitle)
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
  <thead>
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
