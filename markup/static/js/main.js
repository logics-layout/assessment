$('[href="#"]').click(function (e) {e.preventDefault();});
$('[type="tel"]').inputmask('+7(999)999-99-99');

var linkTop = $('.button-top');
linkTop.click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
});

$(window).on({
    load: function () {
        checkFooterHeight();
        checkHeaderFix();
        // IScrollFn();
    },
    scroll: function () {
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 600){
            linkTop.addClass('active');
        }else{
            linkTop.removeClass('active');
        }
        // var scrollTop = $(window).scrollTop();
        // if(scrollTop > 200){
        //     linkTop.addClass('active');
        // }else{
        //     linkTop.removeClass('active');
        // }
        checkHeaderFix();
    },
    resize: function () {
        // popoverFn();
        checkHeaderFix();
        checkFooterHeight();
    }
});


$('.openSelectCoin__after, .openSelectCoin__btnClear').click(function () {
    $('.openSelectCoin').add('.openSelectCoin__content').removeClass('active');
});

$('.obm-select__choice').click(function () {
    var _this = $(this),
        elContent = _this.data('el');

    $('.openSelectCoin').add(elContent).addClass('active');
});

$('.header-mobile__open-nav a').click(function(e){
    e.preventDefault();
   var _this = $(this),
       parent = _this.parent(),
       list = _this.next('.header-mobile__open-nav-sub'),
       time = 0;

    if(list[0]){
        parent.toggleClass('open');
        list.stop().slideToggle(time);
        parent.siblings().removeClass('open').find('.header-mobile__open-nav-sub').stop().slideUp(time);
    }else{
        location.href = _this.attr('href');
    }

});
if($.fn.selectpicker){
    $('select').selectpicker({
        style: '',
        size: 7
    }).selectpicker('setStyle', 'btn', 'remove');
}

if ($.fn.magnificPopup) {
    var magnificPopupObj = {
        delegate: 'a',
        type: 'image',
        tLoading: "",
        mainClass: "",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        },
        iframe: {
            // markup: '<div class="mfp-iframe-scaler">' +
            // '<div class="mfp-close"></div>' +
            // '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            // '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }

                    src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                }
            }
        }
    };

    $('.magnificPopup').each(function () {
        $(this).magnificPopup(magnificPopupObj);
    })
}

function masonryReloadItems(indexTiles, metodClass) {
    metodClass = metodClass ? 'removeClass':'addClass';
    indexTiles.masonry('layout')[metodClass]('active');
    indexTiles.masonry('reloadItems');
}

if ($.fn.masonry) {
    var indexTiles = $('.masonry-col2').masonry({
        itemSelector: '.masonry-col2__section',
        columnWidth: ".grid-sizer",
        gutter: '.gutter-sizer',
        percentPosition: true
    });
    if (indexTiles[0]) {
        indexTiles.imagesLoaded().progress(function() {
            masonryReloadItems(indexTiles);
        });
    }

}

$('.accordion__item-link').click(function(e){
    var _this = $(this),
       parent = _this.parent(),
       content = parent.find('.accordion__item-content'),
       className = 'active',
       classDelete = 'open',
       time = 300;


    parent.toggleClass(className);
    content.slideToggle(time);


    parent.siblings().removeClass(className).find('.accordion__item-content').slideUp(time, function(){
        $(this).parent().removeClass(classDelete);
    });
});

if($.fn.slick){
    $('.slider-accreditations').each(function () {
        var _this = $(this);
        _this.slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: true,
            appendDots: _this.parent().find('.slider-accreditations-dots'),
            arrows: true,
            prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-left' width='20' height='20'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-left'></use></svg></button>",
            nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-right' width='20' height='20'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-right'></use></svg></button>",
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 452,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
    });
    
    $('.team__cnt-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-left' width='20' height='20'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-left'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-right' width='20' height='20'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-right'></use></svg></button>",
        asNavFor: '.team__cnt-sliderName',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 452,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });


    $('.team__cnt-sliderName').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: false,
        asNavFor: '.team__cnt-slider',
        responsive: [
            {
                breakpoint: 452,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    
    

    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        autoplay: true,
        dots: true,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-left' width='20' height='20'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-left'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-right' width='20' height='20'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-right'></use></svg></button>",
    });
}












