//Для попапа


var modal = document.querySelector('.modal');
var modalControl = document.querySelector('.js-modal');
var close = document.querySelector('.modal__close');

modalControl.onclick = function() {
  modal.classList.add('modal--open');
};

close.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.remove('modal--open');
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) {
      if (modal.classList.contains("modal--open")) {
        modal.classList.remove("modal--open");
      };
    };
  });


  //Гамбургер

var menu = document.querySelector(".hamburger");
var close = document.querySelector(".active");
var nav = document.querySelector(".sidebar__nav");
var logo = document.querySelector(".sidebar__logozone");
var contacts = document.querySelector(".sidebar__contacts");


menu.addEventListener("click", function (a) {
      a.preventDefault(), 
      nav.classList.toggle("top-nav-show"),
      logo.classList.toggle("hide"),
      contacts.classList.toggle("hide"),
      menu.classList.toggle("active")
  }),

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

    $("body").on("click", "a", function(event) {

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
            items: 3,
            center: false,
            autoplay: true,
            autoplayTimeout: 10000,
            smartSpeed: 250,
            responsive: {
                0:{
                    items:1,
                    nav:false
                },
                767:{
                    items:2,
                    nav:false
                },
                1024:{
                    items:3,
                    nav:true,
                    loop:false
                }
            },
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