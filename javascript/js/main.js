window.addEventListener('DOMContentLoaded', () => {
    ///////////////////////////////////

    document.querySelector('.top_close_btn').addEventListener('click', function () {
        // this.classList.toggle('on');
        document.querySelector('.TopBanner').classList.add('on')
        document.querySelector('.MainVisual').classList.add('on')
    });

    window.addEventListener('scroll', () => {
        let SCT = window.scrollY;
        SCT > 0
            ? document.querySelector('.Header').classList.add('on')
            : document.querySelector('.Header').classList.remove('on')
    })

    const MAINSLIDE = new Swiper('.main_slider', {
        loop: true,
        on: {
            init: function () {
                console.log(this.slides.length - 2);

                const Current = document.querySelector('.swiper-slide-active');
                Current.classList.add('on');

                document.querySelector('.main_slide_num').innerHTML = (this.realIndex + 1) + " / <span> " + (this.slides.length - 2);
            }
        }
    });

    const Totalslide = document.querySelectorAll('.swiper-slide');
    const SlideDots = document.querySelectorAll('.slide_dots li');

    MAINSLIDE.on('slideChangeTransitionEnd', function () {
        // 1. 번호찍는거
        console.log(this.realIndex);

        // 2. 지금슬라이드(active)에 class(ex. 'on' ) 붙이는거
        const Current = document.querySelector('.swiper-slide-active');
        Totalslide.forEach(it => it.classList.remove('on'));
        Current.classList.add('on')
        console.log(Totalslide, Current, this.realIndex);

        let count = this.realIndex;//0,1,2
        SlideDots.forEach(it => it.classList.remove('on'));
        SlideDots[count].classList.add('on');

        document.querySelector('.main_slide_num').innerHTML = (this.realIndex + 1) + " / <span>" + (this.slides.length - 2);
    });

    document.querySelector('.MainVisual .slide_handler .prev').addEventListener('click', () => {
        MAINSLIDE.slidePrev();
    });
    document.querySelector('.MainVisual .slide_handler .next').addEventListener('click', () => {
        MAINSLIDE.slideNext();
    });

    SlideDots.forEach((it, idx) => {
        it.addEventListener('click', () => {
            console.log(idx);
            MAINSLIDE.slideTo(idx + 1, 600)
        })
    })



    ///////////////////////////////////
});