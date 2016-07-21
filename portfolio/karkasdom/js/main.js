$(document).ready(function() {

	// to top
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('#totop').fadeIn();
		} else {
			$('#totop').fadeOut();
		}
	});

	$('#totop').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
	});


	// big slider
	var aboutSlider = $('.slider__wrap');

	function updateResult(item, value){
		$(item).text(value);
	}

	aboutSlider.on('initialized.owl.carousel ' + 'changed.owl.carousel', function(event) {
	 	updateResult(".slider__current-number", (event.page.index + 1));
		updateResult(".slider__total-number", event.page.count);
	});

	aboutSlider.owlCarousel({
		nav: true,
		items: 1,
		margin: 30,
		loop: true,
		callbacks: true
	});


	// small slider
	$('.house__slider').owlCarousel({
		nav: true,
		items: 3,
		margin: 70,
		loop: true
	});


	//navigate
	$('.nav').onePageNav();


	$("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
		var form_data = $(this).serialize(); //собераем все данные из формы
		$.ajax({
			type: "POST", //Метод отправки
			url: "form.php", //путь до php фаила отправителя
			data: form_data,
			success: function() {
				//код в этом блоке выполняется при успешной отправке сообщения
				console.log("Ваше сообщение отпрвлено!");
				}
			});
		});

});


var form = document.querySelector('.popup');
var formClose = document.querySelector('.popup__close');

function showForm() {
	form.classList.remove('popup--hide');
}

function closeForm() {
	form.classList.add('popup--hide');
}

var kit = document.querySelector('.kit');
var kitClose = document.querySelector('.kit__close');

function showKit() {
	kit.classList.remove('kit--hide');
}

function closeKit() {
	kit.classList.add('kit--hide');
}


