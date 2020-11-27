
$(function () {
//头部展开
$(".header .dj_search").click(function () {
$(".head-user-mask").toggle();
$(".head-user").slideToggle();
})
//头部关闭
$(".head-user-mask").click(function () {
$(this).hide();
$(this).children(".head-user").hide();
})
//实时动态
var swiper = new Swiper('.swiper-real', {
direction: 'vertical',
slidesPerView: 1,
loop: true,
autoplay: {
delay: 3000,
disableOnInteraction: false,
}
});
$('.menu-tab li').click(function () {
$(this).addClass('on').siblings().removeClass('on');
$(this).parents('.menu-tab').siblings('.menu-con').removeClass('on').eq($(this).index()).addClass('on');
})
//收起
$('.answers').on('click', '.da .offold', function () {
$(this).hide().siblings('.da-txt').find('.unfold').show();
unfold();
})
unfold();
function unfold() {
for (var i = 0; i < $('.answers .da .da-txt').length; i++) {
var _this = $('.answers .da .da-txt').eq(i);
var _maxHeight = parseInt(_this.css('line-height')) * 2;
var _height = parseInt(_this.css('height'));
if (_height > _maxHeight) {
_this.css({
'max-height': _maxHeight + 'px',
'overflow': 'hidden'
});
_this.children('.unfold').show();
}
}
}
})

