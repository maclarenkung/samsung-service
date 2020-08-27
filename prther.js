let items = {
  mobile: {
    Unbox: [
      {
        no: "01",
        head: "exqlwkd",
        text: "wqdqdwqdqwdqwdwqdw",
        image: "unbox-01_01",
        image2: "unbox-mb-01_01",
      },
      {
        no: "02",
        head: "exqlwkd",
        text: "wqdqdwqdqwdqwdwqdw",
        image: "unbox-01_02",
        image2: "unbox-mb-01_02",
      },
      {
        no: "03",
        head: "exqlwkd",
        text: "wqdqdwqdqwdqwdwqdw",
        image: "unbox-01_03",
        image2: "unbox-mb-01_03",
      },
      {
        no: "04",
        head: "exqlwkd",
        text: "wqdqdwqdqwdqwdwqdw",
        image: "unbox-01_04",
        image2: "unbox-mb-01_04",
      },
    ],
    Inquiry: [
      {
        no: "04",
        head: "exqlwkd",
        text: "wqdqdwqdqwdqwdwqdw",
        image: "slide",
      },
      {
        no: "05",
        head: "exqlwkd",
        text: "wqdqdwqdqwdqwdwqdw",
        image: "slide",
      },
    ],
  },
  tv: {
    Unbox: [
      {
        no: "01ewrfewrw",
        head: "exqlwkd",
        text: "wqdqdwqdqwdqwdwqdw",
        image: "slide",
      },
      {
        no: "02",
        head: "exqlwkd",
        text: "wqdqdwqdqwdqwdwqdw",
        image: "slide",
      },
      {
        no: "03",
        head: "exqlwkd",
        text: "wqdqdwqdqwdqwdwqdw",
        image: "slide",
      },
    ],
    Inquiry: [
      {
        no: "04",
        head: "exqlwkd",
        text: "wqdqdwqdqwdqwdwqdw",
        image: "slide",
      },
      {
        no: "05",
        head: "exqlwkd",
        text: "wqdqdwqdqwdqwdwqdw",
        image: "slide",
      },
    ],
  },
  wm: {
    Unbox: [
      {
        no: "01",
        head: "exqlwkd",
        text: "wqdqdwqdqwdqwdwqdw",
        image: "slide",
      },
      {
        no: "02",
        head: "exqlwkd",
        text: "wqdqdwqdqwdqwdwqdw",
        image: "slide",
      },
    ],
    Inquiry: [
      {
        no: "04",
        head: "exqlwkd",
        text: "wqdqdwqdqwdqwdwqdw",
        image: "slide",
      },
      {
        no: "05",
        head: "exqlwkd",
        text: "wqdqdwqdqwdqwdwqdw",
        image: "slide",
      },
    ],
  },
};

let mainActive = 'mobile'
let subActive = 'Unbox'

const callSlider = () => {
    var swiper2 = new Swiper(".s2", {
      slidesPerView: 1.3,
      spaceBetween: 100,
      loop: true,
      pagination: {
        el: ".swiper-pagination,.swiper-paginations",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

   
}

const callSlider2 = () => {
  var swiper2 = new Swiper(".s2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination,.swiper-paginations",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


}
// if (matchMedia) {
//   const mq = window.matchMedia("(min-width: 768px)");
//   mq.addListener(WidthChange);
//   WidthChange(mq);
// }
// function WidthChange(mq) {
//   if (mq.matches) {
//     console.log('yeahhhssssshhh');
//   }
//   else {
//     console.log('yeahhhhhh');
//   }
// }

// if (mq.matches) {
//   renderSlider()
// }
// else {
//   renderSlider2()
// }
const renderSlider = (name) =>{

  
    let templateHtml = (data) => {

        if (subActive == 'Unbox' || subActive == 'Inquiry') {
          return ` 
        <div class="swiper-slide slide--01">
           <div class="slide--item">
               <img src="images/${data.image}.png" alt=""  width="100%" class="dt-show"/>
               <img src="images/${data.image2}.png" alt=""  width="100%" class="mb-show"/>
            </div>
        </div>
         
      
        `;
        }
      
    } 
    let render = ''
    items[name][subActive].forEach(el=>{
        render += templateHtml(el)
    })
    return render
}



$(window).ready(()=>{
    $('.button-menu--click').click(function(){
        let dataSlider = $(this).data('slider')
        mainActive = dataSlider
        let content = $(`#${subActive} .swiper-wrapper`)
        content.html(renderSlider(mainActive))
        console.log(renderSlider(mainActive));
        console.log(dataSlider);

          if (matchMedia) {
            const mq = window.matchMedia("(min-width: 768px)");
            mq.addListener(WidthChange);
            WidthChange(mq);
          }
          function WidthChange(mq) {
            if (mq.matches) {
              callSlider()
            }
            else {
              callSlider2()
            }
          }

    })

    $('.service--tab .tablinks').click(function(){
        let dataTabname = $(this).data('tabname')
        subActive = dataTabname
        let content = $(`#${subActive} .swiper-wrapper`)
        content.html(renderSlider(mainActive))
      if (matchMedia) {
        const mq = window.matchMedia("(min-width: 768px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
      }
      function WidthChange(mq) {
        if (mq.matches) {
          callSlider()
        }
        else {
          callSlider2()
        }
      }

    })

})