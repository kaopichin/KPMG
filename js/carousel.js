var mySwiper = new Swiper ('.swiper-container', {
    autoplay: 2000,
    loop: true,
    autoplayDisableOnInteraction :false,
    effect : 'slide',
    // effect : 'coverflow',
    paginationClickable: true,
    // 如果需要分页器
    pagination: '.swiper-pagination',

    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
})