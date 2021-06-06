jQuery(window).scroll(function() {
    var $sections = $('section');
    $sections.each(function(i, el) {
        var top = $(el).offset().top - 100;
        var bottom = top + $(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if (scroll > top && scroll < bottom) {
            $('a.active').removeClass('active');
            $('a[href="#' + id + '"]').addClass('active');

        }
    })
});

$(document).ready(function() {

    $(".sidebar__nav").on("click", "a", function(event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();

        // получем идентификатор блока из атрибута href
        var id = $(this).attr('href'),

            // находим высоту, на которой расположен блок
            top = $(id).offset().top;

        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({ scrollTop: top }, 400);
    });

    $('[data-fancybox="gallery"]').fancybox({
        loop: true,
        infobar: true,
        buttons: [
            // "zoom",
            //"share",
            // "slideShow",
            //"fullScreen",
            "download",
            // "thumbs",
            "close"
        ],
    });

    $(".masked-input-tel").mask("+7 (999) 999-99-99");

    $(function() {
        $('.otzyv-wrap.owl-carousel').owlCarousel({

            margin: 24,
            loop: true,
            // autoWidth: false,
            items: 2,
            center: false,
            autoplay: true,
            autoplayTimeout: 10000,
            smartSpeed: 250,
            dots: true,
            nav: true,
            navText: [$('.slider-nav__prev'), $('.slider-nav__next')]
        })

        $('.license.owl-carousel').owlCarousel({
            items: 4,
            margin: 24,
            loop: true,
            center: false,
            autoplay: true,
            autoplayTimeout: 5000,
            nav: false,
            dots: true
        })
    });


});