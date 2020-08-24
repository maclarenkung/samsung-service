let items = {
    mobile:{
        Unbox:[
            {
                no:'01',
                head:'exqlwkd',
                text : 'wqdqdwqdqwdqwdwqdw',
                image:'unbox-001'
            },
            {
                no: '02',
                head: 'exqlwkd',
                text: 'wqdqdwqdqwdqwdwqdw',
                image: 'unbox-001'
            },
            {
                no: '03',
                head: 'exqlwkd',
                text: 'wqdqdwqdqwdqwdwqdw',
                image: 'slide'
            }   
        ],
        Inquiry: [
            {
                no: '04',
                head: 'exqlwkd',
                text: 'wqdqdwqdqwdqwdwqdw',
                image: 'slide'
            },
            {
                no: '05',
                head: 'exqlwkd',
                text: 'wqdqdwqdqwdqwdwqdw',
                image: 'slide'
            }
        ]
    },
    tv: {
        Unbox: [
            {
                no: '01ewrfewrw',
                head: 'exqlwkd',
                text: 'wqdqdwqdqwdqwdwqdw',
                image: 'slide'
            },
            {
                no: '02',
                head: 'exqlwkd',
                text: 'wqdqdwqdqwdqwdwqdw',
                image: 'slide'
            },
            {
                no: '03',
                head: 'exqlwkd',
                text: 'wqdqdwqdqwdqwdwqdw',
                image: 'slide'
            }
        ],
        Inquiry: [
            {
                no: '04',
                head: 'exqlwkd',
                text: 'wqdqdwqdqwdqwdwqdw',
                image: 'slide'
            },
            {
                no: '05',
                head: 'exqlwkd',
                text: 'wqdqdwqdqwdqwdwqdw',
                image: 'slide'
            }
        ]
    },
     wm: {
        Unbox: [
            {
                no: '01',
                head: 'exqlwkd',
                text: 'wqdqdwqdqwdqwdwqdw',
                image: 'slide'
            },
            {
                no: '02',
                head: 'exqlwkd',
                text: 'wqdqdwqdqwdqwdwqdw',
                image: 'slide'
            }
        ],
        Inquiry: [
            {
                no: '04',
                head: 'exqlwkd',
                text: 'wqdqdwqdqwdqwdwqdw',
                image: 'slide'
            },
            {
                no: '05',
                head: 'exqlwkd',
                text: 'wqdqdwqdqwdqwdwqdw',
                image: 'slide'
            }
        ]
    },

}

let mainActive = 'mobile'
let subActive = 'Unbox'

const callSlider = () => {
    var swiper2 = new Swiper(".s2", {
        slidesPerView: 1.5,
        spaceBetween: 100,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

const renderSlider = (name) =>{

    let templateHtml = (data) => {
        if (subActive == 'Unbox' || subActive == 'Inquiry' ){
            return ` 
        <div class="swiper-slide slide--01">
           <div class="slide--item">
            
                <div class="abc">

                </div>
            
            <img src="images/${data.image}.png" alt=""  width="100%"/>
            </div>
        </div>
        `
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
        callSlider()

    })

    $('.service--tab .tablinks').click(function(){
        let dataTabname = $(this).data('tabname')
        subActive = dataTabname
        let content = $(`#${subActive} .swiper-wrapper`)
        content.html(renderSlider(mainActive))
        callSlider()

    })

})