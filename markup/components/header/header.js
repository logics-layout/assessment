var _fnMenuHeaderTop = function(toggle, list, slide) {
    var className, el, time;
    time = 300;
    el = toggle.closest('.mobile-list-anim');
    className = 'open';

    if (toggle.prop("checked")) {
        if(slide) menuHeaderTopSlide.stop().slideDown(time);
        el.add(list).addClass(className);
    } else {
        if(slide) menuHeaderTopSlide.stop().hide(100);
        el.add(list).removeClass(className);
    }
};

var menuHeaderTopToggle = $('#header-bottom-toggleMenuMbl');
var menuHeaderTopList = $('.header-mobile');
var menuHeaderTopSlide = $('.header-mobile__open');

menuHeaderTopToggle.change(function() {_fnMenuHeaderTop(menuHeaderTopToggle, menuHeaderTopList, true);});
_fnMenuHeaderTop(menuHeaderTopToggle, menuHeaderTopList, menuHeaderTopSlide);
$(document).click(function(e) {
    var target;
    target = $(e.target);
    if ((!target.is(menuHeaderTopList) && !target.closest(menuHeaderTopList)[0]) && (!target.is(menuHeaderTopToggle) && !target.is('.menuTopMobel'))) {
        menuHeaderTopToggle[0].checked = false;
        _fnMenuHeaderTop(menuHeaderTopToggle, menuHeaderTopList, true);
    }
});


var header = $('.header'),
    headerBottom = $('.header__bottom'),
    headerBottomFix = $('.header__bottom-fix');

window.headerHeight = _heightBlock(header);
window.headerBottomHeight = _heightBlock(headerBottom);
var checkHeaderFix = function(){
    // return false;

    if($(window).width() > 991){
        if($(window).scrollTop() >= headerBottomFix.offset().top){
            headerBottom.addClass('fix');
            headerBottomFix.height(headerBottomHeight);
        }else{
            headerBottom.removeClass('fix');
            headerBottomFix.height(0);
        }
    }
};